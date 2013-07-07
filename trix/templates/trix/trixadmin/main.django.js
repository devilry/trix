{% extends "trix/trixadmin/base.django.html" %}
{% load extjs %}
{% load i18n %}


{% block imports %}
   {{ block.super }}
    Ext.require('trix.DashboardButtonBar');
{% endblock %}

{% block appjs %}
    {{ block.super }}

        Ext.define('trix.apps.trix.simplified.topic.SimplifiedTopicSearch', {
            extend: 'Ext.data.Model',
            requires: ['devilry.extjshelpers.RestProxy'],
            fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "name"}],
            idProperty: 'id',
            proxy: Ext.create('devilry.extjshelpers.RestProxy', {
                url: '/trix/restfulsimplifiedtopic/',
                extraParams: {
                    getdata_in_qrystring: true,
                    result_fieldgroups: '[]'
                },
                reader: {
                    type: 'json',
                    root: 'items',
                    totalProperty: 'total'
                },
                writer: {
                    type: 'json'
                }
            })
        });
        Ext.create('Ext.data.Store', {
            model: 'trix.apps.trix.simplified.topic.SimplifiedTopicSearch',
            id: 'trix.apps.trix.simplified.topic.SimplifiedTopicStoreSearch',
            remoteFilter: true,
            remoteSort: true,
            autoSync: true
        });
    
        Ext.define('trix.apps.trix.simplified.periodgroup.SimplifiedPeriodGroupSearch', {
            extend: 'Ext.data.Model',
            requires: ['devilry.extjshelpers.RestProxy'],
            fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "long_name"}, {"type": "auto", "name": "subject"}, {"type": "auto", "name": "subject__long_name"}, {"type": "auto", "name": "periods__id"}, {"type": "auto", "name": "fake_periods"}, {"type": "auto", "name": "fake_followers"}, {"type": "auto", "name": "fake_students"}],
            idProperty: 'id',
            proxy: Ext.create('devilry.extjshelpers.RestProxy', {
                url: '/trix/restfulsimplifiedperiodgroup/',
                extraParams: {
                    getdata_in_qrystring: true,
                    result_fieldgroups: '[]'
                },
                reader: {
                    type: 'json',
                    root: 'items',
                    totalProperty: 'total'
                },
                writer: {
                    type: 'json'
                }
            })
        });
        Ext.create('Ext.data.Store', {
            model: 'trix.apps.trix.simplified.periodgroup.SimplifiedPeriodGroupSearch',
            id: 'trix.apps.trix.simplified.periodgroup.SimplifiedPeriodGroupStoreSearch',
            remoteFilter: true,
            remoteSort: true,
            autoSync: true
        });
    
        Ext.define('trix.apps.trix.simplified.periodexercise.SimplifiedPeriodExerciseSearch', {
            extend: 'Ext.data.Model',
            requires: ['devilry.extjshelpers.RestProxy'],
            fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "period"}, {"type": "auto", "name": "exercise"}, {"type": "int", "name": "points"}, {"type": "bool", "name": "starred"}, {"type": "int", "name": "number"}],
            idProperty: 'id',
            proxy: Ext.create('devilry.extjshelpers.RestProxy', {
                url: '/trix/restfulsimplifiedperiodexercise/',
                extraParams: {
                    getdata_in_qrystring: true,
                    result_fieldgroups: '[]'
                },
                reader: {
                    type: 'json',
                    root: 'items',
                    totalProperty: 'total'
                },
                writer: {
                    type: 'json'
                }
            })
        });
        Ext.create('Ext.data.Store', {
            model: 'trix.apps.trix.simplified.periodexercise.SimplifiedPeriodExerciseSearch',
            id: 'trix.apps.trix.simplified.periodexercise.SimplifiedPeriodExerciseStoreSearch',
            remoteFilter: true,
            remoteSort: true,
            autoSync: true
        });
    
        Ext.define('trix.apps.trix.simplified.node.SimplifiedNodeSearch', {
            extend: 'Ext.data.Model',
            requires: ['devilry.extjshelpers.RestProxy'],
            fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "parentnode"}, {"type": "auto", "name": "short_name"}, {"type": "auto", "name": "long_name"}],
            idProperty: 'id',
            proxy: Ext.create('devilry.extjshelpers.RestProxy', {
                url: '/trix/restfulsimplifiednode/',
                extraParams: {
                    getdata_in_qrystring: true,
                    result_fieldgroups: '[]'
                },
                reader: {
                    type: 'json',
                    root: 'items',
                    totalProperty: 'total'
                },
                writer: {
                    type: 'json'
                }
            })
        });
        Ext.create('Ext.data.Store', {
            model: 'trix.apps.trix.simplified.node.SimplifiedNodeSearch',
            id: 'trix.apps.trix.simplified.node.SimplifiedNodeStoreSearch',
            remoteFilter: true,
            remoteSort: true,
            autoSync: true
        });
    
        Ext.define('trix.apps.trix.simplified.student.SimplifiedStudentSearch', {
            extend: 'Ext.data.Model',
            requires: ['devilry.extjshelpers.RestProxy'],
            fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "username"}, {"type": "auto", "name": "followedgroups__id"}, {"type": "auto", "name": "fake_followedgroups"}],
            idProperty: 'id',
            proxy: Ext.create('devilry.extjshelpers.RestProxy', {
                url: '/trix/restfulsimplifiedstudent/',
                extraParams: {
                    getdata_in_qrystring: true,
                    result_fieldgroups: '[]'
                },
                reader: {
                    type: 'json',
                    root: 'items',
                    totalProperty: 'total'
                },
                writer: {
                    type: 'json'
                }
            })
        });
        Ext.create('Ext.data.Store', {
            model: 'trix.apps.trix.simplified.student.SimplifiedStudentSearch',
            id: 'trix.apps.trix.simplified.student.SimplifiedStudentStoreSearch',
            remoteFilter: true,
            remoteSort: true,
            autoSync: true
        });
    
        Ext.define('trix.apps.trix.simplified.exercise.SimplifiedExerciseSearch', {
            extend: 'Ext.data.Model',
            requires: ['devilry.extjshelpers.RestProxy'],
            fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "short_name"}, {"type": "auto", "name": "long_name"}, {"type": "auto", "name": "text"}, {"type": "int", "name": "points"}, {"type": "int", "name": "topics__id"}, {"type": "int", "name": "prerequisites__id"}, {"type": "auto", "name": "fake_topics"}, {"type": "auto", "name": "fake_prerequisites"}],
            idProperty: 'id',
            proxy: Ext.create('devilry.extjshelpers.RestProxy', {
                url: '/trix/restfulsimplifiedexercise/',
                extraParams: {
                    getdata_in_qrystring: true,
                    result_fieldgroups: '[]'
                },
                reader: {
                    type: 'json',
                    root: 'items',
                    totalProperty: 'total'
                },
                writer: {
                    type: 'json'
                }
            })
        });
        Ext.create('Ext.data.Store', {
            model: 'trix.apps.trix.simplified.exercise.SimplifiedExerciseSearch',
            id: 'trix.apps.trix.simplified.exercise.SimplifiedExerciseStoreSearch',
            remoteFilter: true,
            remoteSort: true,
            autoSync: true
        });
    
        Ext.define('trix.apps.trix.simplified.period.SimplifiedPeriodSearch', {
            extend: 'Ext.data.Model',
            requires: ['devilry.extjshelpers.RestProxy'],
            fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "parentnode"}, {"type": "auto", "name": "short_name"}, {"type": "auto", "name": "long_name"}, {"type": "date", "name": "start_time", "dateFormat": "Y-m-dTH:i:s"}, {"type": "date", "name": "end_time", "dateFormat": "Y-m-dTH:i:s"}, {"type": "auto", "name": "group"}, {"type": "auto", "name": "period_ptr"}, {"type": "auto", "name": "parentnode__short_name"}, {"type": "auto", "name": "parentnode__long_name"}],
            idProperty: 'period_ptr',
            proxy: Ext.create('devilry.extjshelpers.RestProxy', {
                url: '/trix/restfulsimplifiedperiod/',
                extraParams: {
                    getdata_in_qrystring: true,
                    result_fieldgroups: '["subject"]'
                },
                reader: {
                    type: 'json',
                    root: 'items',
                    totalProperty: 'total'
                },
                writer: {
                    type: 'json'
                }
            })
        });
        Ext.create('Ext.data.Store', {
            model: 'trix.apps.trix.simplified.period.SimplifiedPeriodSearch',
            id: 'trix.apps.trix.simplified.period.SimplifiedPeriodStoreSearch',
            remoteFilter: true,
            remoteSort: true,
            autoSync: true
        });
    
        Ext.define('trix.apps.trix.simplified.subject.SimplifiedSubjectSearch', {
            extend: 'Ext.data.Model',
            requires: ['devilry.extjshelpers.RestProxy'],
            fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "parentnode"}, {"type": "auto", "name": "short_name"}, {"type": "auto", "name": "long_name"}],
            idProperty: 'id',
            proxy: Ext.create('devilry.extjshelpers.RestProxy', {
                url: '/trix/restfulsimplifiedsubject/',
                extraParams: {
                    getdata_in_qrystring: true,
                    result_fieldgroups: '[]'
                },
                reader: {
                    type: 'json',
                    root: 'items',
                    totalProperty: 'total'
                },
                writer: {
                    type: 'json'
                }
            })
        });
        Ext.create('Ext.data.Store', {
            model: 'trix.apps.trix.simplified.subject.SimplifiedSubjectSearch',
            id: 'trix.apps.trix.simplified.subject.SimplifiedSubjectStoreSearch',
            remoteFilter: true,
            remoteSort: true,
            autoSync: true
        });
    


    Ext.define('trix.apps.trix.simplified.exercise.SimplifiedExercise', {
            extend: 'Ext.data.Model',
            requires: ['devilry.extjshelpers.RestProxy'],
            fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "short_name"}, {"type": "auto", "name": "long_name"}, {"type": "auto", "name": "text"}, {"type": "int", "name": "points"}, {"type": "int", "name": "topics__id"}, {"type": "int", "name": "prerequisites__id"}, {"type": "auto", "name": "fake_topics"}, {"type": "auto", "name": "fake_prerequisites"}],
            idProperty: 'id',
            proxy: Ext.create('devilry.extjshelpers.RestProxy', {
                url: '/trix/restfulsimplifiedexercise/',
                extraParams: {
                    getdata_in_qrystring: true,
                    result_fieldgroups: '[]'
                },
                reader: {
                    type: 'json',
                    root: 'items',
                    totalProperty: 'total'
                },
                writer: {
                    type: 'json'
                }
            })
        }),
    Ext.define('trix.apps.trix.simplified.topic.SimplifiedTopic', {
            extend: 'Ext.data.Model',
            requires: ['devilry.extjshelpers.RestProxy'],
            fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "name"}],
            idProperty: 'id',
            proxy: Ext.create('devilry.extjshelpers.RestProxy', {
                url: '/trix/restfulsimplifiedtopic/',
                extraParams: {
                    getdata_in_qrystring: true,
                    result_fieldgroups: '[]'
                },
                reader: {
                    type: 'json',
                    root: 'items',
                    totalProperty: 'total'
                },
                writer: {
                    type: 'json'
                }
            })
        }),
    Ext.define('trix.apps.trix.simplified.periodexercise.SimplifiedPeriodExercise', {
            extend: 'Ext.data.Model',
            requires: ['devilry.extjshelpers.RestProxy'],
            fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "period"}, {"type": "auto", "name": "exercise"}, {"type": "int", "name": "points"}, {"type": "bool", "name": "starred"}, {"type": "int", "name": "number"}],
            idProperty: 'id',
            proxy: Ext.create('devilry.extjshelpers.RestProxy', {
                url: '/trix/restfulsimplifiedperiodexercise/',
                extraParams: {
                    getdata_in_qrystring: true,
                    result_fieldgroups: '[]'
                },
                reader: {
                    type: 'json',
                    root: 'items',
                    totalProperty: 'total'
                },
                writer: {
                    type: 'json'
                }
            })
        }),
    Ext.define('trix.apps.trix.simplified.node.SimplifiedNode', {
            extend: 'Ext.data.Model',
            requires: ['devilry.extjshelpers.RestProxy'],
            fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "parentnode"}, {"type": "auto", "name": "short_name"}, {"type": "auto", "name": "long_name"}],
            idProperty: 'id',
            proxy: Ext.create('devilry.extjshelpers.RestProxy', {
                url: '/trix/restfulsimplifiednode/',
                extraParams: {
                    getdata_in_qrystring: true,
                    result_fieldgroups: '[]'
                },
                reader: {
                    type: 'json',
                    root: 'items',
                    totalProperty: 'total'
                },
                writer: {
                    type: 'json'
                }
            })
        });
    Ext.define('trix.apps.trix.simplified.subject.SimplifiedSubject', {
            extend: 'Ext.data.Model',
            requires: ['devilry.extjshelpers.RestProxy'],
            fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "parentnode"}, {"type": "auto", "name": "short_name"}, {"type": "auto", "name": "long_name"}],
            idProperty: 'id',
            proxy: Ext.create('devilry.extjshelpers.RestProxy', {
                url: '/trix/restfulsimplifiedsubject/',
                extraParams: {
                    getdata_in_qrystring: true,
                    result_fieldgroups: '[]'
                },
                reader: {
                    type: 'json',
                    root: 'items',
                    totalProperty: 'total'
                },
                writer: {
                    type: 'json'
                }
            })
        });
    Ext.define('trix.apps.trix.simplified.period.SimplifiedPeriod', {
            extend: 'Ext.data.Model',
            requires: ['devilry.extjshelpers.RestProxy'],
            fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "parentnode"}, {"type": "auto", "name": "short_name"}, {"type": "auto", "name": "long_name"}, {"type": "date", "name": "start_time", "dateFormat": "Y-m-dTH:i:s"}, {"type": "date", "name": "end_time", "dateFormat": "Y-m-dTH:i:s"}, {"type": "auto", "name": "group"}, {"type": "auto", "name": "period_ptr"}, {"type": "auto", "name": "parentnode__short_name"}, {"type": "auto", "name": "parentnode__long_name"}],
            idProperty: 'period_ptr',
            proxy: Ext.create('devilry.extjshelpers.RestProxy', {
                url: '/trix/restfulsimplifiedperiod/',
                extraParams: {
                    getdata_in_qrystring: true,
                    result_fieldgroups: '["subject"]'
                },
                reader: {
                    type: 'json',
                    root: 'items',
                    totalProperty: 'total'
                },
                writer: {
                    type: 'json'
                }
            })
        });
    Ext.define('trix.apps.trix.simplified.periodgroup.SimplifiedPeriodGroup', {
            extend: 'Ext.data.Model',
            requires: ['devilry.extjshelpers.RestProxy'],
            fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "long_name"}, {"type": "auto", "name": "subject"}, {"type": "auto", "name": "subject__long_name"}, {"type": "auto", "name": "periods__id"}, {"type": "auto", "name": "fake_periods"}, {"type": "auto", "name": "fake_followers"}, {"type": "auto", "name": "fake_students"}],
            idProperty: 'id',
            proxy: Ext.create('devilry.extjshelpers.RestProxy', {
                url: '/trix/restfulsimplifiedperiodgroup/',
                extraParams: {
                    getdata_in_qrystring: true,
                    result_fieldgroups: '[]'
                },
                reader: {
                    type: 'json',
                    root: 'items',
                    totalProperty: 'total'
                },
                writer: {
                    type: 'json'
                }
            })
        });
 
    var exercisestore = Ext.create('Ext.data.Store', {
            model: 'trix.apps.trix.simplified.exercise.SimplifiedExercise',
            id: 'trix.apps.trix.simplified.exercise.SimplifiedExerciseStore',
            remoteFilter: true,
            remoteSort: true,
            autoSync: true
        });
    var topicstore = Ext.create('Ext.data.Store', {
            model: 'trix.apps.trix.simplified.topic.SimplifiedTopic',
            id: 'trix.apps.trix.simplified.topic.SimplifiedTopicStore',
            remoteFilter: true,
            remoteSort: true,
            autoSync: true
        });
    var periodexercisestore = Ext.create('Ext.data.Store', {
            model: 'trix.apps.trix.simplified.periodexercise.SimplifiedPeriodExercise',
            id: 'trix.apps.trix.simplified.periodexercise.SimplifiedPeriodExerciseStore',
            remoteFilter: true,
            remoteSort: true,
            autoSync: true
        });
    var nodestore = Ext.create('Ext.data.Store', {
            model: 'trix.apps.trix.simplified.node.SimplifiedNode',
            id: 'trix.apps.trix.simplified.node.SimplifiedNodeStore',
            remoteFilter: true,
            remoteSort: true,
            autoSync: true
        });
    var subjectstore = Ext.create('Ext.data.Store', {
            model: 'trix.apps.trix.simplified.subject.SimplifiedSubject',
            id: 'trix.apps.trix.simplified.subject.SimplifiedSubjectStore',
            remoteFilter: true,
            remoteSort: true,
            autoSync: true
        });
    var periodstore = Ext.create('Ext.data.Store', {
            model: 'trix.apps.trix.simplified.period.SimplifiedPeriod',
            id: 'trix.apps.trix.simplified.period.SimplifiedPeriodStore',
            remoteFilter: true,
            remoteSort: true,
            autoSync: true
        });
    var periodgroupstore = Ext.create('Ext.data.Store', {
            model: 'trix.apps.trix.simplified.periodgroup.SimplifiedPeriodGroup',
            id: 'trix.apps.trix.simplified.periodgroup.SimplifiedPeriodGroupStore',
            remoteFilter: true,
            remoteSort: true,
            autoSync: true
        });

{% comment %}
{{ restfulapi.RestfulSimplifiedExercise|extjs_model }},
    {{ restfulapi.RestfulSimplifiedTopic|extjs_model }},
    {{ restfulapi.RestfulSimplifiedPeriodExercise|extjs_model }},
    {{ restfulapi.RestfulSimplifiedNode|extjs_model }};
    {{ restfulapi.RestfulSimplifiedSubject|extjs_model }};
    {{ restfulapi.RestfulSimplifiedPeriod|extjs_model:"subject" }};
    {{ restfulapi.RestfulSimplifiedPeriodGroup|extjs_model }};
 
    var exercisestore = {{ restfulapi.RestfulSimplifiedExercise|extjs_store }};
    var topicstore = {{ restfulapi.RestfulSimplifiedTopic|extjs_store }};
    var periodexercisestore = {{ restfulapi.RestfulSimplifiedPeriodExercise|extjs_store }};
    var nodestore = {{ restfulapi.RestfulSimplifiedNode|extjs_store }};
    var subjectstore = {{ restfulapi.RestfulSimplifiedSubject|extjs_store }};
    var periodstore = {{ restfulapi.RestfulSimplifiedPeriod|extjs_store }};
var periodgroupstore = {{ restfulapi.RestfulSimplifiedPeriodGroup|extjs_store }};
{% endcomment %}
    nodestore.pageSize = 1;
    subjectstore.pageSize = 1;
    periodstore.pageSize = 1;
    var is_superuser = {{ user.is_superuser|lower }};
{% endblock %}

{% block onready %}
{{ block.super }}


    var dashboard_periodmodel = {{ restfulapi.RestfulSimplifiedPeriod|extjs_model:"subject" }}
    var permchecker = Ext.create('Ext.Component', {
        html: '<div class="section info-small extravisible-small"><h1>{{ DEVILRY_ADMINISTRATOR_NO_PERMISSION_MSG.title }}</h1>' +
            '<p>{{ DEVILRY_ADMINISTRATOR_NO_PERMISSION_MSG.body }}</p></div>',
    });


    var buttonbar = Ext.create('trix.DashboardButtonBar', {
        node_modelname: {{ restfulapi.RestfulSimplifiedNode|extjs_modelname }},
        subject_modelname: {{ restfulapi.RestfulSimplifiedSubject|extjs_modelname }},
        period_modelname: {{ restfulapi.RestfulSimplifiedPeriod|extjs_modelname }},
        periodgroup_modelname: {{ restfulapi.RestfulSimplifiedPeriodGroup|extjs_modelname }},
        topic_modelname:  {{ restfulapi.RestfulSimplifiedTopic|extjs_modelname }},
        exercise_modelname:  {{ restfulapi.RestfulSimplifiedExercise|extjs_modelname }},
        periodexercise_modelname:  {{ restfulapi.RestfulSimplifiedPeriodExercise|extjs_modelname }},
        is_superuser: is_superuser,
        nodestore: nodestore,
        subjectstore: subjectstore,
        periodstore: periodstore,
        periodgroupstore: periodgroupstore,
        topicstore: topicstore,
        exercisestore: exercisestore,
        periodexercisestore: periodexercisestore
    });

    Ext.create('Ext.container.Viewport', {
        layout: 'border',
        style: 'background-color: transparent',
        items: [{
            region: 'north',
            xtype: 'trixheader',
            navclass: 'administrator'
        }, {
            region: 'south',
            xtype: 'trixfooter'
        }, {
            region: 'center',
            xtype: 'container',
            border: false,
            padding: {left: 20, right: 20},
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [searchwidget, {xtype:'box', height: 20}, permchecker, buttonbar/*, {
                xtype: 'container',
                flex: 1,
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                items: [{
                    xtype: 'panel',
                    flex: 3,
                    layout: 'fit',
                    border: false,
                    id: 'active-periods'
                }]
            }*/]
        }]
    });

    nodestore.load();
    subjectstore.load();
    periodstore.load();
    topicstore.load();
    exercisestore.load();
    periodexercisestore.load();

 if (!is_superuser) {
     buttonbar.hide();
     permchecker.show();
} else {
    permchecker.hide();
    searchwidget.show();
}
Ext.getBody().unmask();


{% endblock %}

