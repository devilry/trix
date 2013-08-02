// restful-models.js: models needed for various rest-tasks

// This code was originally automagically generated by some devilry code
// which since then has been deprecated and removed. I have hence captured
// the output and put it into this module which can be included into other
// templates using something like this:
// { % include "trix/restful-models.js" % }
// inside a javascript block or tag.
// It seems likely that a lot of this is fairly redundant for most pages,
// and it could be worth as a means of optimization, to look into whether
// just including stores and models into a page (but not using them) causes
// any XHRs to happen.
// Signed-By: Jonathan Ringstad, Wed Jul 24 16:01:17 CEST 2013

Ext.define('trix.apps.trix.simplified.periodexercise.SimplifiedPeriodExerciseSearch', {
    extend: 'Ext.data.Model',
    requires: ['trix_extjshelpers.RestProxy'],
    fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "period"},
	     {"type": "auto", "name": "exercise"}, {"type": "int", "name": "points"},
	     {"type": "bool", "name": "starred"}, {"type": "int", "name": "number"}],
    idProperty: 'id',
    proxy: Ext.create('trix_extjshelpers.RestProxy', {
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
    requires: ['trix_extjshelpers.RestProxy'],
    fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "username"}, {"type": "auto", "name": "followedgroups__id"}, {"type": "auto", "name": "fake_followedgroups"}],
    idProperty: 'id',
    proxy: Ext.create('trix_extjshelpers.RestProxy', {
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
    requires: ['trix_extjshelpers.RestProxy'],
    fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "parentnode"}, {"type": "auto", "name": "short_name"}, {"type": "auto", "name": "long_name"}],
    idProperty: 'id',
    proxy: Ext.create('trix_extjshelpers.RestProxy', {
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
    requires: ['trix_extjshelpers.RestProxy'],
    fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "name"}],
    idProperty: 'id',
    proxy: Ext.create('trix_extjshelpers.RestProxy', {
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
    requires: ['trix_extjshelpers.RestProxy'],
    fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "short_name"}, {"type": "auto", "name": "long_name"}, {"type": "auto", "name": "text"}, {"type": "int", "name": "points"}, {"type": "int", "name": "topics__id"}, {"type": "int", "name": "prerequisites__id"}, {"type": "auto", "name": "fake_topics"}, {"type": "auto", "name": "fake_prerequisites"}],
    idProperty: 'id',
    proxy: Ext.create('trix_extjshelpers.RestProxy', {
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

Ext.define('trix.apps.trix.simplified.node.SimplifiedNodeSearch', {
    extend: 'Ext.data.Model',
    requires: ['trix_extjshelpers.RestProxy'],
    fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "parentnode"}, {"type": "auto", "name": "short_name"}, {"type": "auto", "name": "long_name"}],
    idProperty: 'id',
    proxy: Ext.create('trix_extjshelpers.RestProxy', {
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

Ext.define('trix.apps.trix.simplified.period.SimplifiedPeriodSearch', {
    extend: 'Ext.data.Model',
    requires: ['trix_extjshelpers.RestProxy'],
    fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "parentnode"}, {"type": "auto", "name": "short_name"}, {"type": "auto", "name": "long_name"}, {"type": "date", "name": "start_time", "dateFormat": "Y-m-dTH:i:s"}, {"type": "date", "name": "end_time", "dateFormat": "Y-m-dTH:i:s"}, {"type": "auto", "name": "group"}, {"type": "auto", "name": "period_ptr"}, {"type": "auto", "name": "parentnode__short_name"}, {"type": "auto", "name": "parentnode__long_name"}],
    idProperty: 'period_ptr',
    proxy: Ext.create('trix_extjshelpers.RestProxy', {
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

Ext.define('trix.apps.trix.simplified.exercise.SimplifiedExerciseSearch', {
    extend: 'Ext.data.Model',
    requires: ['trix_extjshelpers.RestProxy'],
    fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "short_name"}, {"type": "auto", "name": "long_name"}, {"type": "auto", "name": "text"}, {"type": "int", "name": "points"}, {"type": "int", "name": "topics__id"}, {"type": "int", "name": "prerequisites__id"}, {"type": "auto", "name": "fake_topics"}, {"type": "auto", "name": "fake_prerequisites"}],
    idProperty: 'id',
    proxy: Ext.create('trix_extjshelpers.RestProxy', {
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

Ext.define('trix.apps.trix.simplified.periodgroup.SimplifiedPeriodGroupSearch', {
    extend: 'Ext.data.Model',
    requires: ['trix_extjshelpers.RestProxy'],
    fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "long_name"}, {"type": "auto", "name": "subject"}, {"type": "auto", "name": "subject__long_name"}, {"type": "auto", "name": "periods__id"}, {"type": "auto", "name": "fake_periods"}, {"type": "auto", "name": "fake_followers"}, {"type": "auto", "name": "fake_students"}],
    idProperty: 'id',
    proxy: Ext.create('trix_extjshelpers.RestProxy', {
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

Ext.define('trix.apps.trix.simplified.periodexercise.SimplifiedPeriodExercise', {
    extend: 'Ext.data.Model',
    requires: ['trix_extjshelpers.RestProxy'],
    fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "period"}, {"type": "auto", "name": "exercise"}, {"type": "int", "name": "points"}, {"type": "bool", "name": "starred"}, {"type": "int", "name": "number"}],
    idProperty: 'id',
    proxy: Ext.create('trix_extjshelpers.RestProxy', {
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

Ext.define('trix.apps.trix.simplified.node.SimplifiedNode', {
    extend: 'Ext.data.Model',
    requires: ['trix_extjshelpers.RestProxy'],
    fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "parentnode"}, {"type": "auto", "name": "short_name"}, {"type": "auto", "name": "long_name"}],
    idProperty: 'id',
    proxy: Ext.create('trix_extjshelpers.RestProxy', {
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
    requires: ['trix_extjshelpers.RestProxy'],
    fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "parentnode"}, {"type": "auto", "name": "short_name"}, {"type": "auto", "name": "long_name"}],
    idProperty: 'id',
    proxy: Ext.create('trix_extjshelpers.RestProxy', {
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
    requires: ['trix_extjshelpers.RestProxy'],
    fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "parentnode"}, {"type": "auto", "name": "short_name"}, {"type": "auto", "name": "long_name"}, {"type": "date", "name": "start_time", "dateFormat": "Y-m-dTH:i:s"}, {"type": "date", "name": "end_time", "dateFormat": "Y-m-dTH:i:s"}, {"type": "auto", "name": "group"}, {"type": "auto", "name": "period_ptr"}, {"type": "auto", "name": "parentnode__short_name"}, {"type": "auto", "name": "parentnode__long_name"}],
    idProperty: 'period_ptr',
    proxy: Ext.create('trix_extjshelpers.RestProxy', {
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
    requires: ['trix_extjshelpers.RestProxy'],
    fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "long_name"}, {"type": "auto", "name": "subject"}, {"type": "auto", "name": "subject__long_name"}, {"type": "auto", "name": "periods__id"}, {"type": "auto", "name": "fake_periods"}, {"type": "auto", "name": "fake_followers"}, {"type": "auto", "name": "fake_students"}],
    idProperty: 'id',
    proxy: Ext.create('trix_extjshelpers.RestProxy', {
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

Ext.define('trix.apps.trix.simplified.student.SimplifiedStudent', {
    extend: 'Ext.data.Model',
    requires: ['trix_extjshelpers.RestProxy'],
    fields: [{"type": "int", "name": "id"}, {"type": "auto", "name": "username"}, {"type": "auto", "name": "followedgroups__id"}, {"type": "auto", "name": "fake_followedgroups"}],
    idProperty: 'id',
    proxy: Ext.create('trix_extjshelpers.RestProxy', {
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
