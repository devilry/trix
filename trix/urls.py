from django.conf.urls.defaults import patterns, url
from django.contrib.auth.decorators import login_required

from devilry.apps.authenticate.views import logout

from restful import trix_manager
import trixviews
import trix.views.mainview
import trix.views.adminview
import trix.views.profileview
import trix.views.periodadminview

urlpatterns = patterns('devilry.projects.dev.apps.trix',
    url(r'^$', trix.views.mainview.main, name='trix'),
    url(r'^logout/$', logout, name='trix-logout'),
    url(r'^profile/$', trix.views.profileview.profile, name='profile'),
    url(r'^exercise/(?P<exercise>\d+)/status$',
        trixviews.exercisestatus, name='exercisestatus'),
    url(r'^trixadmin/$', trix.views.adminview.administrator, name='trixadmin'),
    url(r'^trixadmin/period/(?P<period_id>\d+)$', trix.views.periodadminview.periodadmin, name='trixperiodadmin'),
    url(r'^trixadmin/periodgroup/(?P<periodgroup_id>\d+)$', trixviews.periodgroupadmin, name='trixperiodgroupadmin'),
    url(r'^trixadmin/exercise/(?P<exercise_id>\d+)$', trixviews.exerciseadmin, name='trixexerciseadmin'),
    url(r'^trixadmin/topic/(?P<topic_id>\d+)$', trixviews.topicadmin, name='trixtopicadmin'),
    url(r'^topic/(?P<topic_id>\d+)$',
        trix.views.mainview.main, name='topicview'),
    url(r'^exercise/(?P<exercise_id>\d+)$',
        trix.views.mainview.main, name='exerciseview'),
    url(r'^period/(?P<period_id>\d+)$',
        trix.views.mainview.main, name='periodview'),)
urlpatterns += trix_manager
