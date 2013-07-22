{% extends "trix/trixadmin/base.django.html" %}
{% load extjs %}
{% load i18n %}


{% block imports %}
{{ block.super }}

<!--
//Ext.require('trix.DashboardButtonBar');
//replaced with normal buttons, see below
-->
Ext.syncRequire('devilry_authenticateduserinfo.UserInfo');
{% endblock %}

{% block appjs %}
{% include "trix/restful-models.js" %}

{{ block.super }}
        permchecker = undefined;

        Ext.create('Ext.data.Store', {
            model: 'trix.apps.trix.simplified.periodgroup.SimplifiedPeriodGroupSearch',
            id: 'trix.apps.trix.simplified.periodgroup.SimplifiedPeriodGroupStoreSearch',
            remoteFilter: true,
            remoteSort: true,
            autoSync: true
        });
    
        Ext.create('Ext.data.Store', {
            model: 'trix.apps.trix.simplified.periodexercise.SimplifiedPeriodExerciseSearch',
            id: 'trix.apps.trix.simplified.periodexercise.SimplifiedPeriodExerciseStoreSearch',
            remoteFilter: true,
            remoteSort: true,
            autoSync: true
        });
    
        Ext.create('Ext.data.Store', {
            model: 'trix.apps.trix.simplified.node.SimplifiedNodeSearch',
            id: 'trix.apps.trix.simplified.node.SimplifiedNodeStoreSearch',
            remoteFilter: true,
            remoteSort: true,
            autoSync: true
        });
    
        Ext.create('Ext.data.Store', {
            model: 'trix.apps.trix.simplified.student.SimplifiedStudentSearch',
            id: 'trix.apps.trix.simplified.student.SimplifiedStudentStoreSearch',
            remoteFilter: true,
            remoteSort: true,
            autoSync: true
        });
        Ext.create('Ext.data.Store', {
            model: 'trix.apps.trix.simplified.exercise.SimplifiedExerciseSearch',
            id: 'trix.apps.trix.simplified.exercise.SimplifiedExerciseStoreSearch',
            remoteFilter: true,
            remoteSort: true,
            autoSync: true
        });
    
        Ext.create('Ext.data.Store', {
            model: 'trix.apps.trix.simplified.period.SimplifiedPeriodSearch',
            id: 'trix.apps.trix.simplified.period.SimplifiedPeriodStoreSearch',
            remoteFilter: true,
            remoteSort: true,
            autoSync: true
        });
    
        Ext.create('Ext.data.Store', {
            model: 'trix.apps.trix.simplified.subject.SimplifiedSubjectSearch',
            id: 'trix.apps.trix.simplified.subject.SimplifiedSubjectStoreSearch',
            remoteFilter: true,
            remoteSort: true,
            autoSync: true
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

    nodestore.pageSize = 1;
    subjectstore.pageSize = 1;
    periodstore.pageSize = 1;
    //var is_superuser = {{ user.is_superuser|lower }};
{% endblock %}

{% block onready %}
{{ block.super }}


var dashboard_periodmodel = Ext.ModelManager.getModel('trix.apps.trix.simplified.period.SimplifiedPeriod');

permchecker = Ext.create('Ext.Component', {
        html: '<div class="section info-small extravisible-small"><h1>{{ DEVILRY_ADMINISTRATOR_NO_PERMISSION_MSG.title }}</h1>' +
            '<p>{{ DEVILRY_ADMINISTRATOR_NO_PERMISSION_MSG.body }}</p></div>',
    });
    permchecker.hide();
    devilry_authenticateduserinfo.UserInfo.load(function(user){
        console.log(user.data);
        is_superuser = user.data.is_nodeadmin || user.data.is_superadmin // do "superadmin"s even exist?
	    || user.data.is_subjectadmin || user.data.is_superuser;
	if (!is_superuser) {
	    permchecker.show();
	}
	else {
	    // buttonbar.show()
	    searchwidget.show();
	    console.log("TODO: admin detected.");
	}
    });
buttonbar = Ext.create('trix.AdminButtonBar', {
    topic_modelname: 'trix.apps.trix.simplified.topic.SimplifiedTopic',
    exercise_modelname: 'trix.apps.trix.simplified.exercise.SimplifiedExercise',
});
    // buttonbar = Ext.create('trix.DashboardButtonBar', {
    //     node_modelname: 'trix.apps.trix.simplified.node.SimplifiedNode',
    //     subject_modelname: 'trix.apps.trix.simplified.subject.SimplifiedSubject',
    //     period_modelname: 'trix.apps.trix.simplified.period.SimplifiedPeriod',
    //     periodgroup_modelname: 'trix.apps.trix.simplified.periodgroup.SimplifiedPeriodGroup',
    //     topic_modelname:  'trix.apps.trix.simplified.topic.SimplifiedTopic',
    //     exercise_modelname:  'trix.apps.trix.simplified.exercise.SimplifiedExercise',
    //     periodexercise_modelname:  'trix.apps.trix.simplified.periodexercise.SimplifiedPeriodExercise',
    //     is_superuser: is_superuser,
    //     nodestore: nodestore,
    //     subjectstore: subjectstore,
    //     periodstore: periodstore,
    //     periodgroupstore: periodgroupstore,
    //     topicstore: topicstore,
    //     exercisestore: exercisestore,
    //     periodexercisestore: periodexercisestore
    // });

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

Ext.getBody().unmask();

{% endblock %}

