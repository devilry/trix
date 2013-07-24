from datetime import datetime
from time import localtime

from django.contrib.auth.decorators import login_required
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404

from devilry.utils.module import dump_all_into_dict
from devilry.apps.core.models import Period
from trix.models import Status, Exercise, Topic, ExerciseStatus, PeriodExercise, PeriodGroup

from django.dispatch import receiver
from django.core.signals import request_started, request_finished

import logging

import restful

@receiver(request_started, weak=False)
@receiver(request_finished, weak=False)
def status_checker(sender, **kwargs):
    logger = logging.getLogger('sauce');
    logger.debug("%s - Status count: %d", unicode(localtime()), Status.objects.count())


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

# @login_required
# def profile(request):
#     """
#     Profile page showing user stats.
#     """
#     level = get_level(get_points(request.user))
#     return render(request, 'trix/profile.django.html',
#                   {'level': level,
#                    'portrait': get_portrait(level['level'])})
# @login_required
# def administrator(request):
#     """
#     Administrator page showing the administrator interface
#     """
#     return render(request, 'trix/trixadmin/main.django.js',
#                   {'restfulapi': dump_all_into_dict(restful),
#                    'page_title':'admin'})

# @login_required
# def periodadmin(request, period_id=-1):
#     """
#     Administrator interface for periods,
#     allowing an admin to change a period's exercises.
#     """
#     return render(request, 'trix/trixadmin/period.django.html',
#                   {'objectid': period_id,
#                    'restfulapi': dump_all_into_dict(restful)
#                    })


# @login_required
# def periodgroupadmin(request, periodgroup_id=-1):
#     """
#     Administrator interface for period groups,
#     allowing an admin to add periods.
#     """
#     return render(request, 'trix/trixadmin/periodgroup.django.html',
#                   {'objectid': periodgroup_id,
#                    'restfulapi': dump_all_into_dict(restful)
#                    })


@login_required
def exerciseadmin(request, exercise_id=-1):
    """
    Administrator interface for exercises,
    allowing an admin to edit exercises.
    """
    return render(request, 'trix/trixadmin/exercise.django.html',
                  {'objectid': exercise_id,
                   'restfulapi': dump_all_into_dict(restful)
                   })
@login_required
def topicadmin(request, topic_id=-1):
    """
    Administrator interface for topics,
    allowing an admin to edit topics.
    """
    return render(request, 'trix/trixadmin/topic.django.html',
                  {'objectid': topic_id,
                   'restfulapi': dump_all_into_dict(restful),
                   'page_title':'admin'
                   })

@login_required
def exercisestatus(request, exercise=-1):
    """
    Sets the status for an exercise.
    This is made for AJAX
    """
    exc = get_object_or_404(PeriodExercise, pk=exercise)
    
    status = None
    if request.POST['status'] != "-1":
        status = get_object_or_404(Status, pk=request.POST['status'])

    if status is not None and not status.active:
        raise Http404

    exc_status = None
    try:
        exc_status = exc.student_results.get(student=request.user)
    except ExerciseStatus.DoesNotExist:
        if status is not None:
            exc_status = ExerciseStatus(exercise=exc,
                                        student=request.user, status=status)

    if status is None:
        if exc_status is not None:
            exc_status.delete()
        points = get_level(get_points(request.user))
        return HttpResponse("%d, %d, %d, %d, %d, %d"
                            % (-1, points['level'], points['percentage'],
                                points['points_on_level'],
                                points['level_points'],
                                points['total_points']),
                            mimetype="text/plain")

    exc_status.status = status
    exc_status.full_clean()
    exc_status.save()
    points = get_level(get_points(request.user))
    return HttpResponse("%d, %d, %d, %d, %d, %d" % (exc_status.status.id,
                                                    points['level'],
                                                    points['percentage'],
                                                    points['points_on_level'],
                                                    points['level_points'],
                                                    points['total_points']),
                        mimetype="text/plain")
