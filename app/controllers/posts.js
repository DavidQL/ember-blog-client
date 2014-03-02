App.PostsController = Ember.ArrayController.extend({
	hasCurrentModel: function() {
		return !!this.get('currentModel');
	}.property('currentModel'),
	isOwner: function() {
		var _this = this;
		if (!this.currentModel.get('author').get('id')) {
			return this.currentModel.get('author').then(function(author) {
				console.log(author.get('id') === _this.get('currentUser').id)
				return author.get('id') === _this.get('currentUser').id
			});
		}
		return false;
	}.property('currentModel')
});

Ember.Handlebars.helper('showBodyIfModelsEqual', function(model1, model2) {
	var both_models_passed_in = model1 && model2;
	if (!both_models_passed_in) {
		return '';
	}
	if (model1.get('id') === model2.get('id')) {
		return model1.get('body');
	}
	return '';
});