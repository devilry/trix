from django.contrib.auth.decorators import login_required
from devilry.utils.module import dump_all_into_dict
from django.shortcuts import render

@login_required
def periodgroupadmin(request, periodgroup_id=-1):
    """
    Administrator interface for period groups,
    allowing an admin to add periods.
    """
    return render(request, 'trix/trixadmin/periodgroup.django.html',
                  {'objectid': periodgroup_id,
                   'restfulapi': dump_all_into_dict(restful)
                   })
