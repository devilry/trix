Ext.define('trix.forms.Subject', {
    extend: 'Ext.form.Panel',
    alias: 'widget.administrator_subjectform',
    cls: 'widget-periodform',
    requires: [
        'devilry.extjshelpers.formfields.ForeignKeySelector'
    ],

    suggested_windowsize: {
        width: 600,
        height: 400
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

    items: [{
        name: "short_name",
        fieldLabel: "Short name",
        xtype: 'textfield',
        emptyText: 'Example: math101'
    }, {
        name: "long_name",
        fieldLabel: "Long name",
        xtype: 'textfield',
        emptyText: 'Example: MATH101 - Introduction to mathematics'
    }, {
        name: "parentnode",
        fieldLabel: "Parent-node",
        xtype: 'foreignkeyselector',
        model: 'trix.apps.trix.simplified.node.SimplifiedNode',
        emptyText: 'Select a parent-node',
        displayTpl: '{long_name} ({short_name})',
        dropdownTpl: '<div class="important">{short_name}</div><div class="unimportant">{long_name}</div>'
    }],

    help: [
        '<strong>Short name</strong> is a short name used when the long name takes to much space. Short name can only contain english lower-case letters, numbers and underscore (_).',
        '<strong>Long name</strong> is a longer descriptive name which can contain any character.',
        '<strong>Parent-node</strong> is the node where this subject belongs.'
    ]
});
