// restful-stores.js: stores needed for various rest-tasks

// helper method for looking up stores
function findStore(storeName){
    var store = Ext.StoreManager.lookup(storeName);
    if(store === undefined){
	throw "Fatal error: Unable to find store '" + storeName + "'!";
    }
    return store;
};

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
    model: 'trix.apps.trix.simplified.exercise.SimplifiedExercise',
    id: 'trix.apps.trix.simplified.exercise.SimplifiedExerciseStore',
    remoteFilter: true,
    remoteSort: true,
    autoSync: true
});

Ext.create('Ext.data.Store', {
    model: 'trix.apps.trix.simplified.topic.SimplifiedTopic',
    id: 'trix.apps.trix.simplified.topic.SimplifiedTopicStore',
    remoteFilter: true,
    remoteSort: true,
    autoSync: true
});


Ext.create('Ext.data.Store', {
    model: 'trix.apps.trix.simplified.periodexercise.SimplifiedPeriodExercise',
    id: 'trix.apps.trix.simplified.periodexercise.SimplifiedPeriodExerciseStore',
    remoteFilter: true,
    remoteSort: true,
    autoSync: true
});

Ext.create('Ext.data.Store', {
    model: 'trix.apps.trix.simplified.node.SimplifiedNode',
    id: 'trix.apps.trix.simplified.node.SimplifiedNodeStore',
    remoteFilter: true,
    remoteSort: true,
    autoSync: true
});

Ext.create('Ext.data.Store', {
    model: 'trix.apps.trix.simplified.subject.SimplifiedSubject',
    id: 'trix.apps.trix.simplified.subject.SimplifiedSubjectStore',
    remoteFilter: true,
    remoteSort: true,
    autoSync: true
});

Ext.create('Ext.data.Store', {
    model: 'trix.apps.trix.simplified.period.SimplifiedPeriod',
    id: 'trix.apps.trix.simplified.period.SimplifiedPeriodStore',
    remoteFilter: true,
    remoteSort: true,
    autoSync: true
});

Ext.create('Ext.data.Store', {
    model: 'trix.apps.trix.simplified.periodgroup.SimplifiedPeriodGroup',
    id: 'trix.apps.trix.simplified.periodgroup.SimplifiedPeriodGroupStore',
    remoteFilter: true,
    remoteSort: true,
    autoSync: true
});
