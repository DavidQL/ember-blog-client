# Ember Grunt Starter

This is a build/development tool for Ember developers to setup a basic application that includes: SASS compilation, concatenation of all javascript to a single app.js file, ember handlebars (templates) compilation, jshinting, local http server, project watch tools.  It also includes a "release" function which will uglify (minify/compress) all files for a production deployment version of your app.  

## Getting Started
	
**THIS GETTING STARTED ASSUMES YOU ALREADY HAVE NPM INSTALLED**

If you do not, download it here: [NPM](https://npmjs.org)

open up your terminal/cmd

run
```shell
npm install -g grunt-cli
//this installs the grunt command globally

cd to directory for code
//this is where we will put the code

git clone https://github.com/sgterban/ember-grunt.git
//this downloads the repository

cd into repository root
//this is where we'll runt grunt tasks from

npm install
//this will install all the dependencies of the project

grunt
//starts our build tools
```

Access the page at - **http://localhost:9090/**

**Note that this is loading the /debug directory of files**

Your **terminal** will continue to **watch** project directories as you save/edit files.  On each **save**, grunt will recompile **all** of your files.

## Templates 

This project **pre-compiles** your ember templates for you!

**It is important to note that naming convention MATTERS!** 

The file name of your templates (.hbs files) will be transpiled into the equivalent of 
```html	
<script type="text/x-handlebars" data-template-name="FILE_NAME">
````

## SASS

For those new to **SASS**, do NOT worry! The SASS file will compile **regular CSS** as well!  In the mean time, I encourage you to look into [SASS](http://sass-lang.com).

The root of your CSS is in /css/base.scss.  

If you are adding additional files to this directory, make sure to add them to this file via @import.  

## Controllers, Views, Routes

This project is watching for any .js files in these directories: 

1. /app/views/
2. /app/controllers/
3. /app/routes/

Feel free to add them at your discretion.  Note that an example of the class extention for each directory has been created for you.  If you do not need to extend the classes, ERASE them!  Ember will create them automatically if not defined.

## Images

The application is currently configured to look at the app/images directory for images.  Each time a file is added or a release is run, these images will be copied into the /debug/images and /release/images directories.

## QUnit

This project includes a basic testing infrastructure.  All tests should be located in the **/tests** directory.  The project already **includes an example test**.  

```javascript
	test("qunit example", function() {
		ok(1 == "1", "Basic test example ");
	});
```

These tests will run in the **terminal on save** of javascript files within the /app directory.  The tests are compiled into qunit/test.js, which is included in the index.html file also in this directory.  Unit Test away!

Qunit Tests via web browser can be found at **http://localhost:9092/**

## Release Process

This project is already setup for you to build release builds of your Ember applications.  Note that the release process will check your javascript files for jshint errors and warnings.  You will need to fix these warnings in order to complete the release process.  
Here is how:

1. open up your terminal/cmd
2. run

```shell
cd into repo
grunt release
```

Access your production candidate at **http://localhost:9091**
The **/release** directory will contain your production-ready code

## Future Goals of Repo
1.  spriting/image optimzation
2.  enable requires and/or index files for controllers, views, and routes with dependencies
3.  fixture data server

##Special Thank You
This project would not be possible were it not for the hard work from the folks at Ember.js, Grunt.js, NPM, and the many Grunt contributors that make up this project.  A special thanks to Jeff Schilling for introducing me to Ember, and without whom I would not have been able to make this.The project is truly a "dwarf standing on the shoulder of giants".