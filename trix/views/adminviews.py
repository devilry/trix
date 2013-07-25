import trix.restful
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from devilry.utils.module import dump_all_into_dict


@login_required
def administrator(request):
    """
    Administrator page showing the administrator interface
    """
    return render(request, 'trix/trixadmin/main.django.js',
                  {'restfulapi': dump_all_into_dict(trix.restful),
                   'page_title':'admin',
                   'TRIX_ADMINISTRATOR_NO_PERMISSION': {
                       # TODO: this should probably be localizable
                       'head': "You are not an administrator",
                       'body': "You are not registered as an administrator on any Node, Subject/Course, Period/Semester or Assignment in Devilry. If this is wrong, please contact the system administrator."
                   }
               })

@login_required
def periodadmin(request, period_id=-1):
    """
    Administrator interface for periods,
    allowing an admin to change a period's exercises.
    """
    return render(request, 'trix/trixadmin/period.django.html',
                  {'objectid': period_id,
                   'restfulapi': dump_all_into_dict(trix.restful),
                   'page_title':'exercise admin'
               })

@login_required
def periodgroupadmin(request, periodgroup_id=-1):
    """
    Administrator interface for period groups,
    allowing an admin to add periods.
    """
    return render(request, 'trix/trixadmin/periodgroup.django.html',
                  {'objectid': periodgroup_id,
                   'restfulapi': dump_all_into_dict(trix.restful)
               })



@login_required
def exerciseadmin(request, exercise_id=-1):
    """
    Administrator interface for exercises,
    allowing an admin to edit exercises.
    """
    return render(request, 'trix/trixadmin/exercise.django.html',
                  {'objectid': exercise_id,
                   'restfulapi': dump_all_into_dict(trix.restful),
                   'page_title': 'exercise admin'
                   })
@login_required
def topicadmin(request, topic_id=-1):
    """
    Administrator interface for topics,
    allowing an admin to edit topics.
    """
    return render(request, 'trix/trixadmin/topic.django.html',
                  {'objectid': topic_id,
                   'restfulapi': dump_all_into_dict(trix.restful),
                   'page_title':'topic admin'
                   })
