App.User = DS.Model.extend({
	name: DS.attr(),
	email: DS.attr(),
	password: DS.attr(),
	password_confirmation: DS.attr(),
	posts: DS.hasMany('post', {async: true})
});