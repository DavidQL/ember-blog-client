App.NewPostRoute = Ember.Route.extend(App.CurrentUserHelper, {
  model: function() {
    if (!this.get('currentUser')) {
      this.transitionTo('posts');
      return;
    }
    return this.store.createRecord('post');
  },
  deactivate: function() {
    if (!this.controller.get('model').get('id')) {
      this.controller.get('model').deleteRecord();
    }
  }
});