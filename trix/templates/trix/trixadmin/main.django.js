{% extends "trix/trixadmin/base.django.html" %}
{% load extjs %}
{% load i18n %}


{% block imports %}
{{ block.super }}

Ext.syncRequire('devilry_authenticateduserinfo.UserInfo');
{% endblock %}

{% block appjs %}
{% include "trix/restful-models.js" %}
{% include "trix/restful-stores.js" %}


{{ block.super }}
permchecker = undefined;

var exercisestore = findStore("trix.apps.trix.simplified.exercise.SimplifiedExerciseStore");
var topicstore = findStore("trix.apps.trix.simplified.topic.SimplifiedTopicStore");
var periodexercisestore = findStore("trix.apps.trix.simplified.periodexercise.SimplifiedPeriodExerciseStore");
var nodestore = findStore("trix.apps.trix.simplified.node.SimplifiedNodeStore");
var subjectstore = findStore("trix.apps.trix.simplified.subject.SimplifiedSubjectStore");
var periodstore = findStore("trix.apps.trix.simplified.period.SimplifiedPeriodStore");
var periodgroupstore = findStore("trix.apps.trix.simplified.periodgroup.SimplifiedPeriodGroupStore");

nodestore.pageSize = 1;
subjectstore.pageSize = 1;
periodstore.pageSize = 1;
{% endblock %}

{% block onready %}
{{ block.super }}

var dashboard_periodmodel = Ext.ModelManager.getModel('trix.apps.trix.simplified.period.SimplifiedPeriod');

permchecker = Ext.create('Ext.Component', {
    html: '<div class="section info-small extravisible-small">' +
    '<h1>{{ TRIX_ADMINISTRATOR_NO_PERMISSION.head }}</h1>' +
        '<p> {{ TRIX_ADMINISTRATOR_NO_PERMISSION.body }} </p></div>',
});
permchecker.hide();

devilry_authenticateduserinfo.UserInfo.load(function(user){
    //console.log(user.data);
    is_superuser = user.data.is_nodeadmin || user.data.is_superadmin // do "superadmin"s even exist?
    || user.data.is_subjectadmin || user.data.is_superuser;
    if (!is_superuser) {
        permchecker.show();
    }
    else {
        searchwidget.show();
        console.log("TODO: admin detected.");
    }
});
buttonbar = Ext.create('trix.AdminButtonBar', {
    topic_modelname: 'trix.apps.trix.simplified.topic.SimplifiedTopic',
    exercise_modelname: 'trix.apps.trix.simplified.exercise.SimplifiedExercise',
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
        padding: '0 20px 0 20px',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [
        {% if user.is_superuser %}
            searchwidget,
            {
                xtype:'box',
                height: 20
            },
            permchecker,
            buttonbar
        {% else %}
            {
                xtype: 'box',
                padding: '20px',
                html: '{% trans "You do not have admin rights for Trix." %}'
            }
        {% endif %}
        ]
    }]
});

Ext.getBody().unmask();
{% endblock %}
