App.Post = DS.Model.extend({
	title: DS.attr(),
	body: DS.attr(),
	author: DS.belongsTo('author', {async: true})
});