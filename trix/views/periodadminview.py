from django.contrib.auth.decorators import login_required
from devilry.utils.module import dump_all_into_dict
from django.shortcuts import render

@login_required
def periodadmin(request, period_id=-1):
    """
    Administrator interface for periods,
    allowing an admin to change a period's exercises.
    """
    return render(request, 'trix/trixadmin/period.django.html',
                  {'objectid': period_id,
                   'restfulapi': dump_all_into_dict(restful)
                   })
