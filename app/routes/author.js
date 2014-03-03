App.AuthorRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('user', params.author_id);
	}
});