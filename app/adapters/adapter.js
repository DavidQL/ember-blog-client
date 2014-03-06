App.Host = "http://ember-blog-api.herokuapp.com";

App.Adapter = DS.RESTAdapter.extend({
  bulkCommit: false
});

DS.RESTAdapter.reopen({
  host: App.Host
});

$.ajaxSetup({
  xhrFields: {
      withCredentials: true
  }
});

App.CurrentUserHelper = {
  beforeModel: function() {
    if (!this.controllerFor('application').get('currentUser')) {
      var auth_deferred = $.get(App.Host + '/session');

      auth_deferred.then(function(user) {
        this.controllerFor('application').set('currentUser', user);
      }.bind(this));

      return auth_deferred;
    } 
  },
  currentUser: function() {
    return this.controllerFor('application').get('currentUser');
  }.property()
}