App.AuthorRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('author', params.author_id);
	}
});