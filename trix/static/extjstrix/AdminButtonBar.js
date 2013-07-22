Ext.define('trix.AdminButtonBar', {
    extend: 'Ext.Panel',
    cls: 'adminbuttonbar',
    border: 0,
    height: 40,
    layout: {
	type: 'vbox',
	align: 'stretch',
	pack: 'center',
	padding: '40 40 40 40'
    },
    config: {
	topic_modelname: undefined,
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
			    text: "New Topic",
			    handler: function() {
				console.log("new topic!");
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
			    text: "New Exercise",
			}
		    ]
		},
		{ 'html': "<strong>Note: </strong> If you wish to create Nodes, Periods, Subjects et cetera, you will have to do so"
		  + " through <!--<a href=\"/\">-->devilrys admin interface.<!--</a>-->",
		  // TODO: put in URL here to devilry admin interface. Needs to be passed in through constructor, probably
		}
	    ]
	});
	this.callParent(arguments);
    }
});
