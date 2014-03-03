App.Post = DS.Model.extend({
	title: DS.attr(),
	body: DS.attr(),
	user: DS.belongsTo('user', {async: true})
});