App.PostRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('post', params.post_id);
	},
	setupController: function(controller, model) {
		// we need to set currentUser on this controller
		// currentUser can be found on the application controller
		/* fill me in


		*/
	}
});