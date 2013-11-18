from django.conf.urls.defaults import patterns, url
from django.contrib.auth.decorators import login_required
from django.views.i18n import javascript_catalog

from devilry.apps.authenticate.views import logout
from devilry_settings.i18n import get_javascript_catalog_packages

from restful import trix_manager
#import trixviews
import trix.views.mainviews
import trix.views.adminviews
import trix.views.profileviews
import trix.views.ajaxviews

i18n_packages = get_javascript_catalog_packages(
    #'devilry_examiner',
    'trix', 'devilry.apps.core')


urlpatterns = patterns('devilry.projects.dev.apps.trix',
    url(r'^$', trix.views.mainviews.main, name='trix'),
    url(r'^logout/$', logout, name='trix-logout'),
    url(r'^profile/$', trix.views.profileviews.profile, name='profile'),
    url(r'^exercise/(?P<exercise>\d+)/status$',
        trix.views.ajaxviews.exercisestatus, name='exercisestatus'),
    url(r'^trixadmin/$', trix.views.adminviews.administrator, name='trixadmin'),
    url(r'^trixadmin/period/(?P<period_id>\d+)$', trix.views.adminviews.periodadmin, name='trixperiodadmin'),
    url(r'^trixadmin/periodgroup/(?P<periodgroup_id>\d+)$', trix.views.adminviews.periodgroupadmin, name='trixperiodgroupadmin'),
    url(r'^trixadmin/exercise/(?P<exercise_id>\d+)$', trix.views.adminviews.exerciseadmin, name='trixexerciseadmin'),
    url(r'^trixadmin/topic/(?P<topic_id>\d+)$', trix.views.adminviews.topicadmin, name='trixtopicadmin'),
    url(r'^topic/(?P<topic_id>\d+)$',
        trix.views.mainviews.main, name='topicview'),
    url(r'^exercise/(?P<exercise_id>\d+)$',
        trix.views.mainviews.main, name='exerciseview'),
    url(r'^period/(?P<period_id>\d+)$',
        trix.views.mainviews.main, name='periodview'),
    url('^i18n.js$', javascript_catalog, kwargs={'packages': i18n_packages},
        name='trix_i18n')
)
urlpatterns += trix_manager
