App.PostRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('post', params.post_id);
	},
	setupController: function(controller, model) {
		this.controllerFor('posts').set('currentModel', model);
	},
	deactivate: function() {
		this.controllerFor('posts').set('currentModel', null);
	}
});