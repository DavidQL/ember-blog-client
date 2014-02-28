App.ApplicationController = Ember.ArrayController.extend({
	authors: function() {
		return this.store.find('author')
	}.property()
});