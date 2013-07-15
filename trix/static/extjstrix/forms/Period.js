Ext.define('trix.forms.Period', {
    extend: 'Ext.form.Panel',
    alias: 'widget.administrator_periodform',
    cls: 'widget-periodform',
    requires: [
        'devilry.extjshelpers.formfields.ForeignKeySelector',
        'devilry.extjshelpers.formfields.DateTimeField',
	'devilry_extjsextras.form.DateTimeField',
	'devilry_extjsextras.DatetimeHelpers'
    ],

    suggested_windowsize: {
        width: 600,
        height: 500
    },

    flex: 8,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    fieldDefaults: {
        labelAlign: 'top',
        labelWidth: 100,
        labelStyle: 'font-weight:bold'
    },
    defaults: {
        margins: '0 0 10 0'
    },


    items: [{
        name: "short_name",
        fieldLabel: "Short name",
        xtype: 'textfield',
        emptyText: 'Example: spring01'
    }, {
        name: "long_name",
        fieldLabel: "Long name",
        xtype: 'textfield',
        emptyText: 'Example: Spring 2001'
    }, {
        name: "parentnode",
        fieldLabel: "Subject",
        xtype: 'foreignkeyselector',
        model: 'trix.apps.trix.simplified.subject.SimplifiedSubject',
        emptyText: 'Select a subject',
        displayTpl: '{long_name} ({short_name})',
        dropdownTpl: '<div class="important">{short_name}</div><div class="unimportant">{long_name}</div>'
    }, {
        xtype: 'fieldcontainer',
        fieldLabel: 'Time span',
        //labelStyle: 'font-weight:bold;padding:0',
        layout: 'hbox',

        fieldDefaults: {
            labelAlign: 'top'
        },

        items: [
	    {
	    	name: "start_time",
	    	xtype: "devilry_extjsextras-datetimefield",
	    	fieldLabel: "Start",
	    	hideLabel: true,
	    	allowBlank: false,
	    	itemId: "startlabel",
	    	width: 100
	    },
	    {
		xtype: 'box',
		width: 20
            },
	    {
	    	name: "end_time",
	    	xtype: "devilry_extjsextras-datetimefield",
	    	fieldLabel: "Stop",
	    	hideLabel: true,
	    	allowBlank: false,
	    	itemId: "endlabel",
	    	width: 100
	    }

	]
    }],

    help: [
        '<strong>Short name</strong> is a short name used when the long name takes to much space. Short name can only contain english lower-case letters, numbers and underscore (_)',
        '<strong>Long name</strong> is a longer descriptive name which can contain any character.',
        'Choose the <strong>subject</strong> where this period belongs.'
    ]
});
