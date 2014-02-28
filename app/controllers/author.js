App.AuthorController = Ember.ObjectController.extend({
	posts: function() {
		var user_id = this.get('model').get('id');
		return this.store.find('post', {user_id: user_id});
	}.property('model')
});