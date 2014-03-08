App.NewAuthorController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var _this = this;
      this.get('model').save()
      	.then(function() {
	        _this.transitionToRoute('index');
		})
		.fail(function(errors) {
			alert("Create author failed: " + JSON.stringify(errors.responseText));
		});
    }
  }
});