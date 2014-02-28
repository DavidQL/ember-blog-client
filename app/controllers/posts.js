App.PostsController = Ember.ArrayController.extend({
	hasCurrentModel: function() {
		return !!this.get('currentModel');
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