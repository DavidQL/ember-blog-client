App.PostsRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('post');
	},
	setupController: function(controller, model) {
		controller.set('content', model);
	    console.log(controller.get('currentModel'), this)
	}
});