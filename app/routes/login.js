App.LoginRoute = Ember.Route.extend({
	model: function() {
		return {};
	},
	setupController: function(controller, model) {
		controller.set('content', model);
		controller.set('applicationController', this.controllerFor('application'));
	}
});