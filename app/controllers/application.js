App.ApplicationController = Ember.ArrayController.extend({
  actions: {
    logOut: function() {
      $.removeCookie('auth_token');
      this.set('currentUser', null);
      this.transitionToRoute('index');
    }
  },
  /* something's missing here: 


  */
});