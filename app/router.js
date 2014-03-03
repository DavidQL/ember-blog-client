App.Router.map(function(){
	/* Routes missing here


	*/
	this.resource('newPost', {path: "posts/new"});
	this.resource('author', {path: "/authors/:author_id"});
	this.resource('newAuthor', {path: "/authors/new"});
	this.resource('login');
});