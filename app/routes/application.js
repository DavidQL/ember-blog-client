App.ApplicationRoute = Ember.Route.extend({
	setupController: function(controller, model) {
		controller.set('content', model);

		// fetch currentUser based on cookie
		$.get('http://localhost:8080/session').then(function(user) {
			controller.set('currentUser', user);
		}.bind(this));
	}
})