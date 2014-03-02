App.PostController = Ember.ObjectController.extend({
	setIsOwner: function() {
		var _this = this;
		return this.get('model').get('author').then(function(author) {
			_this.set('isOwner', (author.get('id') === _this.get('currentUser').id.toString()))
			return (author.get('id') === _this.get('currentUser').id.toString())
		});
	}.observes('content.author.id')
});