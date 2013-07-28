from trix_restful import restful_modelapi, ModelRestfulView, RestfulManager
from devilry.apps.extjshelpers import extjs_restful_modelapi

from trix.simplified import SimplifiedPeriod
from manager import trix_manager
from authorization import AuthorizationMixin
from subject import RestfulSimplifiedSubject
from periodgroup import RestfulSimplifiedPeriodGroup

@trix_manager.register
@extjs_restful_modelapi
@restful_modelapi
class RestfulSimplifiedPeriod(AuthorizationMixin):
    class Meta:
        simplified = SimplifiedPeriod
        foreignkey_fields = {'parentnode': RestfulSimplifiedSubject,
                             'group': RestfulSimplifiedPeriodGroup}

    class ExtjsModelMeta:
        combobox_fieldgroups = ['subject']
        combobox_displayfield = 'short_name'
        combobox_tpl = ('<div class="section popuplistitem">'
                        '    <p class="path">{parentnode__long_name}</p>'
                        '    <h1>{long_name:ellipsis(40)}</h1>'
                        '</div>')
