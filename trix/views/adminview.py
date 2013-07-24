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
                   'page_title':'admin'})
