App.ApplicationController = Ember.ArrayController.extend({
  actions: {
    logOut: function() {
      $.removeCookie('auth_token');
      this.set('currentUser', null);
      this.transitionToRoute('index');
    }
  },
	authors: function() {
		return this.store.find('author')
	}.property()
});