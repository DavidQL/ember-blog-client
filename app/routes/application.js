App.ApplicationRoute = Ember.Route.extend(App.CurrentUserHelper, {
	setupController: function(controller, model) {
		controller.set('content', model);
	}
});