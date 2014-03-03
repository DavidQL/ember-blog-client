App.Host = "http://localhost:8080";

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
    /* fill me in 





    */
  },
  currentUser: function() {
    /* fill me in 

    */
  }.property()
}