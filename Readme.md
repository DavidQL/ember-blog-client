Ember Grunt Starter

This is a build/development tool for Ember developers to setup a basic application that includes: SASS compilation, concatenation of all javascript to a single app.js file, ember handlebars (templates) compilation, jshinting, local http server, project watch tools.  It also includes a "release" function which will uglify (minify/compress) all files for a production deployment version of your app.  

Getting Started
	
	***THIS GETTING STARTED ASSUMES YOU ALREADY HAVE NPM INSTALLED**
		If you do not, download it at https://npmjs.org

	open up your terminal/cmd
	install grunt - "type" npm install -g grunt

	cd to directory for code
	"type" git clone https://github.com/sgterban/ember-grunt.git
	cd into repo
	"type" grunt

	Access the page at - http://localhost:9090/
	**Note that this is loading the /debug directory of files

	Your terminal will continue to watch project directories as you save/edit files.  
	On each save, grunt will recompile all of your files, and run jshint against them.  
	Any warnings will be displayed on the terminal.  Keep your jshinter happy!

Templates 

	This project pre-compiles your ember templates for you! 
	**It is important to note that naming convention MATTERS!  

	The file name of your templates (.hbs files) will be transpiled into the equivalent of 
	<script type="text/x-handlebars" data-template-name="FILE_NAME">

SASS

	**For those new to SASS, do not worry! The SASS file will take regular CSS as well!  
	In the mean time, I encourage you to look into SASS, as it is awesome.  

	The root of your CSS is in /css/base.scss.  

	If you are adding additional files to this directory, make sure to add them to this file
	via @import.  

Controllers, Views, Routes

	This project is watching for any .js files in these directories.  
	Feel free to add them at your discretion.  


QUnit

	This project includes a basic testing infrastructure.  
	All tests should be located in the /tests directory.  
	The project already includes an example test.  

	These tests will run in the terminal on save of javascript files within the /app directory.
	The tests are compiled into qunit/test.js, which is included in the index.html file also
	located in this directory.  Unit Test away!

	Qunit Tests via web browser can be found at http://localhost:9092/

Release Process
	
	open up your terminal/cmd
	cd into repo
	"type" grunt relase

	Access your production candidate at - http://localhost:9091
	The /release directory will contain your production-ready code

Future Goals of Repo
	spriting/image optimzation
	enable requires abd/or index files for controllers, views, and routes with dependencies