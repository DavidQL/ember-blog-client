App.Router.map(function(){
	this.resource('posts');
	this.resource('post', {path: "posts/:post_id"});
	this.resource('newPost', {path: "posts/new"});
	this.resource('author', {path: "/authors/:author_id"});
	this.resource('newAuthor', {path: "/authors/new"});
	this.resource('login');
});