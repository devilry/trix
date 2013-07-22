// restful.js: models and stores needed for various rest-tasks
Ext.define('trix.apps.trix.simplified.periodexercise.SimplifiedPeriodExerciseSearch', {
    extend: 'Ext.data.Model',
    requires: ['devilry.extjshelpers.RestProxy'],
    fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "period"},
	     {"type": "auto", "name": "exercise"}, {"type": "int", "name": "points"},
	     {"type": "bool", "name": "starred"}, {"type": "int", "name": "number"}],
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
});
