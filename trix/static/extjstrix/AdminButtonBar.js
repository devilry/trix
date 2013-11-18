Ext.define('trix.AdminButtonBar', {
    extend: 'Ext.Panel',
    cls: 'adminbuttonbar',
    requires: [ // Note: copy-pasted from old ButtonBarButton, with functionality stripped. Enable as needed when adding new things.
        // 'trix.forms.Node',
        // 'trix.forms.Subject',
        // 'trix.forms.Period',
        // 'trix.forms.PeriodGroup',
        'trix.forms.Topic',
        'trix.forms.Exercise',
        // 'trix.forms.PeriodExercise',
        'devilry.administrator.DefaultCreateWindow',
        'trix_extjshelpers.RestfulSimplifiedEditPanel',
        // 'trix_extjshelpers.ButtonBarButton'
    ],
    
    border: 0,
    //height: 40,
    //layout: {
        //type: 'vbox',
        //align: 'stretch',
        //pack: 'center',
        //padding: '40 40 40 40'
    //},
    config: {
	topic_modelname: undefined,
	exercise_modelname: undefined,
    },
    constructor: function(config){
	this.initConfig(config);
	this.callParent([config]);
    },
    initComponent: function() {
        var me = this;
        Ext.apply(this, {
            items: [
		{
		    xtype: 'container',
		    layout: {
			type: 'hbox',
			pack: 'center',
			align: 'center',
		    },
		    items: [
			{
			    xtype: 'button',
                scale: 'large',
			    text: "New Topic",
			    handler: function() {
				console.log("new topic! " + me.topic_modelname);
				Ext.create('trix.DefaultEditWindow', {
				    title: 'Create new topic',
				    editpanel: Ext.ComponentManager.create({
					xtype: 'restfulsimplified_editpanel',
					model: me.topic_modelname,
					editform: Ext.widget('administrator_topicform')
				    }),
				}).show();
			    }
			},
			{
			    xtype: 'button',
                scale: 'large',
			    text: "New Exercise",
			    handler: function() {
				Ext.create('trix.DefaultEditWindow', {
				    title: 'Create new exercise',
				    editpanel: Ext.ComponentManager.create({
					xtype: 'restfulsimplified_editpanel',
					model: me.exercise_modelname,
					editform: Ext.widget('administrator_exerciseform')
				    }),
				}).show();
			    }
			}
		    ]
		},
		{
            xtype: 'box',
            style: 'text-align: center;',
            margin: '10px 0 0 0',

            // TODO: put in URL here to devilry admin interface. Needs to be passed in through constructor, probably
            'html': [
                "<strong>Note: </strong> If you wish to create Nodes, Periods, Subjects et cetera, you will have to do so",
                " through <!--<a href=\"/\">-->devilrys admin interface.<!--</a>-->"
            ].join('')
		}]
	});
	this.callParent(arguments);
    }
});
