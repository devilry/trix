from django.shortcuts import render, get_object_or_404
from django.contrib.auth.decorators import login_required

@login_required
def profile(request):
    """
    Profile page showing user stats.
    """
    level = get_level(get_points(request.user))
    return render(request, 'trix/profile.django.html',
                  {'level': level,
                   'portrait': get_portrait(level['level'])})

def get_portrait(level):
    """
    Gets the avatar portrait URL for a given level.
    """
    #user should be able to choose the portrait type at some point. Currently only ifitar is available
    portrait_class = 'ifitar'
    image_type = 'png'
    if level > 10:
        return ''.join([portrait_class, '10', '.', image_type])
    
    return ''.join([portrait_class, (str(level)), '.', image_type])


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

def get_portrait(level):
    """
    Gets the avatar portrait URL for a given level.
    """
    #user should be able to choose the portrait type at some point. Currently only ifitar is available
    portrait_class = 'ifitar'
    image_type = 'png'
    if level > 10:
        return ''.join([portrait_class, '10', '.', image_type])
    
    return ''.join([portrait_class, (str(level)), '.', image_type])
