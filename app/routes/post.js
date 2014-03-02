App.PostRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('post', params.post_id);
	},
	setupController: function(controller, model) {
		controller.set('content', model);
		controller.set('currentUser', this.controllerFor('application').get('currentUser'));
	}
});