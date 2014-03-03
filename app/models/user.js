App.User = DS.Model.extend({
	name: DS.attr(),
	posts: DS.hasMany('post', {async: true})
});