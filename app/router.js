App.Router.map(function(){
  this.resource('posts', function() {
    this.resource('post', {path: "/:post_id"});
  });
  this.resource('author', {path: "/authors/:author_id"}, function() {
    this.resource('authorPosts', {path: "/posts"});
  });
  this.resource('newAuthor', {path: "/authors/new"});
});