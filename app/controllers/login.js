App.LoginController = Ember.ObjectController.extend({
	actions: {
		logIn: function() {
			var _this = this;
			$.ajax({
				type: "POST",
				url: App.Host + "/sessions",
				data: {
					email: this.get('email'),
					password: this.get('password')
				}
			}).done(function(user) {
				_this.get('applicationController').set('currentUser', {
					id: user.id,
					name: user.name
				});
				_this.transitionToRoute('index');
			}).fail(function() {
				alert('Bad login info');
			});
		}
	}
});