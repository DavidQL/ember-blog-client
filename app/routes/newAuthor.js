App.NewAuthorRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('author');
  }
})