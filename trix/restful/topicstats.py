from trix_restful import restful_api, RestfulView, RestfulManager
from trix_restful.restview import extjswrap
from trix_restful.serializers import SerializableResult, ErrorMsgSerializableResult

from django.db.models import Count, Sum
from django.http import HttpResponseBadRequest

from trix.models import Topic, PeriodExercise, ExerciseStatus
from manager import trix_manager

@trix_manager.register
@restful_api
class RestfulTopicStatistics(RestfulView):

    def process_topic(self, topic, user):
        all_exc = topic.exercises.filter(periods__isnull=False)
        exercises = PeriodExercise.objects.filter(exercise__in=all_exc)
        t_data = {}
        t_data['id'] = topic.id
        t_data['name'] = topic.name
        t_data['exercises'] = exercises.count()
        t_data['total_points'] = exercises.aggregate(total_points=Sum('points'))['total_points']
        if t_data['total_points'] is None:
            t_data['total_points'] = 0
        t_data['starred'] = exercises.filter(starred=True).count()
        exercises = exercises.filter(student_results__student=user)
        results = ExerciseStatus.objects.filter(student=user, exercise__in=exercises)
        t_data['points'] = 0
        t_data['exercises_done'] = exercises.count()
        for result in results:
            t_data['points'] += int(result.exercise.points * result.status.percentage)
        exercises = exercises.filter(starred=True)
        t_data['starred_done'] = exercises.count()
        t_data['points_percent'] = int(t_data['points'] * 100 / t_data['total_points'])
        t_data['done_percent'] = int(t_data['exercises_done'] * 100 / t_data['exercises'])
        t_data['starred_percent'] = 0
        if t_data['starred'] > 0:
            int(t_data['starred_done'] * 100 / t_data['starred'])
        return t_data


    def crud_update(self, request, id):
        return ErrorMsgSerializableResult("Cannot change statistics.",
                                          httpresponsecls=HttpResponseBadRequest)

    def crud_delete(self, request, id):
        return ErrorMsgSerializableResult("Cannot delete statistics.",
                                          httpresponsecls=HttpResponseBadRequest)

    def crud_create(self, request):
        return ErrorMsgSerializableResult("Cannot create statistics.",
                                          httpresponsecls=HttpResponseBadRequest)

    def crud_read(self, request, id):
        topic = Topic.objects.get(id=id)
        data = [self.process_topic(topic, request.user)]
        result = extjswrap(data, True, total=1)
        return SerializableResult(result)

    def crud_search(self, request):
        start = 0
        limit = 25
        if 'getdata_in_qrystring' in request.GET:
            if 'start' in request.GET:
                start = request.GET['start']
            if 'limit' in request.GET:
                limit = request.GET['limit']
        
        topics = Topic.objects.filter(exercises__isnull=False).filter(exercises__periods__isnull=False).distinct()[start:start+limit]

        data = []
        for topic in topics:
            t_data = self.process_topic(topic, request.user)
            data.append(t_data)

        result = extjswrap(data, True, total=len(data))
        return SerializableResult(result)
