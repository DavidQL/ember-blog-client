App.NewPostController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      this.get('model').save().then(function(post) {
        this.transitionToRoute('post', this.get('model').get('id'))
      }.bind(this));
    }
  }
});