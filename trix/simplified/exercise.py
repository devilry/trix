from trix.models import Exercise, Topic
from devilry.simplified import (FieldSpec, simplified_modelapi, SimplifiedModelApi, FilterSpec, FilterSpecs)
from authorization import AuthorizationMixin
from fakefieldcleaner import fakefieldcleaner

@fakefieldcleaner
@simplified_modelapi
class SimplifiedExercise(AuthorizationMixin):
    """ Simplified wrapper for :class:`trix.models.Exercise`. """
    class Meta(object):
        model = Exercise
        searchfields = FieldSpec('short_name', 'long_name', 'topics__name')
        resultfields = FieldSpec('id', 'short_name', 'long_name', 'text', 'points',
                                 'topics__id', 'prerequisites__id',
                                 topics=['topics__name'], prerequisites=['prerequisites__name'])

#       editablefields = ('id', 'short_name', 'long_name', 'text', 'points')
        fake_editablefields = ('fake_topics', 'fake_prerequisites')
        fake_real_map =  {'fake_topics': ('topics', Topic, 'pk', 'name'),
                          'fake_prerequisites': ('prerequisites', Topic, 'pk', 'name')}
        filters = FilterSpecs(FilterSpec('topics__id'))
        methods = ['create', 'read', 'update', 'delete', 'search']

