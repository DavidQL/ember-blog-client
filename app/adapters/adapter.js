App.Adapter = DS.RESTAdapter.extend({
  bulkCommit: false
});

DS.RESTAdapter.reopen({
  pathForType: function(type) {
    return type === "author" ? "users" : Ember.String.pluralize(type);
  },
  host: 'http://localhost:8080'
});

App.ApplicationSerializer = DS.RESTSerializer.extend({
  normalizePayload: function(type, payload) {
    // convert incoming "users" to "authors"
    if (type === App.Author) {
      return this.mapRootKey('user', 'author', payload);
    }
    return payload;
  },
  mapRootKey: function(server_word, client_word, payload) {
    var response = {},
      key = payload[server_word] ? client_word : Ember.String.pluralize(client_word),
      value = payload[server_word] ? payload[server_word] : payload[Ember.String.pluralize(server_word)];
    response[key] = value;
    return response;
  }
});