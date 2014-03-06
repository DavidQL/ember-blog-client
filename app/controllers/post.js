App.PostController = Ember.ObjectController.extend({
	actions: {
		edit: function() {
			this.set('isEditing', true);
		},
		save: function() {
			this.get('model').save().then(function() {
				this.set('isEditing', false);
			}.bind(this));
		},
		delete: function() {
			if (confirm("Delete this post?")) {
				console.log(this.get('model'))
				this.get('model').deleteRecord();
				this.get('model').save().then(function() {
					this.transitionToRoute('posts');
				}.bind(this));
			}
		}
	},
	setIsOwner: function() {
		var _this = this;
		return this.get('model').get('user').then(function(user) {
			if (!user) {
				_this.set('isOwner', false);
				return false;
			}
			_this.set('isOwner', (user.get('id') === _this.get('currentUser') && _this.get('currentUser').id.toString()))
		});
	}.observes('content.user.id')
});