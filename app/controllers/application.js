App.ApplicationController = Ember.ArrayController.extend({
  actions: {
    logOut: function() {
      return $.ajax({
        type: "POST",
        url: App.Host + "/sessions/destroy"
      }).done(function() {
        this.set('currentUser', null);
        this.transitionToRoute('index');
      }.bind(this));
    }
  },
	authors: function() {
		return this.store.find('user')
	}.property()
});