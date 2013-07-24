import trix.restful
from trix.models import Status, Exercise, Topic, ExerciseStatus, PeriodExercise, PeriodGroup
from datetime import datetime
from django.shortcuts import render, get_object_or_404
from devilry.utils.module import dump_all_into_dict

def main(request, period_id=-1, topic_id=-1, exercise_id=-1):
    """
    Main page showing current exercises.
    """

    all_exercises = None
    
    if period_id != -1:
        all_exercises = PeriodExercise.objects.filter(period__id=period_id)

    elif topic_id != -1:
        all_exercises = PeriodExercise.objects.filter(exercise__topics=topic_id)

    elif exercise_id != -1:
        all_exercises = PeriodExercise.objects.filter(id=exercise_id)

    else:
        all_exercises = PeriodExercise.objects.filter(period__start_time__lte
                                                      =datetime.now(),
                                                      period__end_time__gte
                                                      =datetime.now())

    exercises = {}
    topics = {}
    prerequisites = {}
    topicstats = {}
    followedperiods = []
    followedgroups = []
    if request.user.is_authenticated():
        followedgroups = request.user.followedgroups.values_list('id', flat=True)
    if not followedgroups:
        followedgroups = PeriodGroup.objects.values_list('id', flat=True)

    # This should be switched out with javascript logic that looks up exercises
    for exercise in all_exercises:
        e = {'id': exercise.id,
             'number': exercise.number,
             'title': exercise.exercise.long_name,
             'text': exercise.exercise.text,
             'status': -1,
             'status_name': '',
             'points': exercise.points,
             'starred': exercise.starred,
             'topics': exercise.exercise.topics.all(),
             'prerequisites': exercise.exercise.prerequisites.all()
             }

        for topic in e['topics']:
            if not topicstats.has_key(topic.id):
                topicstats.setdefault(topic.id, get_topic_points(topic, request.user))
        for topic in e['prerequisites']:
            if not topicstats.has_key(topic.id):
                topicstats.setdefault(topic.id, get_topic_points(topic, request.user))        

        ps = exercise.exercise.prerequisites.exclude(id__in=prerequisites.keys)
        for p in ps:
            prerequisites.setdefault(p.id, p)
        
        if request.user.is_authenticated():
            try:
                stats = exercise.student_results.get(student=request.user)
                e.update({'status': stats.status.id, 'status_name': stats.status.name})
            except ExerciseStatus.DoesNotExist:
                pass

        exercises.setdefault(exercise.period, {}).update([[exercise.number, e]])
        if (exercise.period not in followedperiods and period_id != -1
            or exercise_id != -1 or exercise.period.group_id in followedgroups):
            followedperiods.append(exercise.period)

    statuses = []
    if request.user.is_authenticated():
        statuses = Status.objects.filter(active=True)

    return render(request,'trix/main.django.html',
                  {'exercises': exercises,
                   'statuses': statuses,
                   'topicstats': topicstats,
                   'followedperiods': followedperiods,
                   'level': get_level(get_points(request.user)),
                   'restfulapi': dump_all_into_dict(trix.restful)})

#                  {'exercises': Period.objects.all().exercises.all()})

def get_level(points=0):
    """
    Calculates a user's level based on points.
    For each level you need 1.5x the points needed to reach the previous level,
    starting with 10 points for level 2.

    Returns a dictionary with stats related to levelling.
    """
    level = 1
    add = 10
    total = add
    while points >= total:
        add = int(add * 1.5)
        total += add
        level += 1

    levelpoints = points-(total-add)

    return {'level': level,
            'next_level': level+1,
            'level_points': add,
            'total_next': total,
            'points_on_level': levelpoints,
            'points_needed': add-levelpoints,
            'total_points': points,
            'percentage': levelpoints * 100 / add}

def get_points(user):
    """
    Gets the total number of points a user has acquired.
    """
    if not user.is_authenticated():
        return 0
    points_total = 0;
    for stats in user.exercise_results.all():
        points_total += int(stats.exercise.points * stats.status.percentage)
    return points_total

def get_topic_points(topic, user):
    """
    Gets the number of points a user has acquired for a given topic.
    """
    if not user.is_authenticated():
        return 0
    exercises = topic.exercises.all()
    stats = []
    for e in exercises:
        stats.extend(ExerciseStatus.objects.filter(student=user,
                                                   exercise__in=e.periods.all()))

    points = 0
    for stat in stats:
        points += int(stat.exercise.points * stat.status.percentage)
    return points
