module.exports = function(grunt) {
	'use strict';
	//All grunt related functions

	grunt.initConfig({
		jshint: {
			files: ['gruntfile.js', 'app/controllers/*.js','app/*.js','app/views/*.js','app/routes/*.js'],
			options: {
				eqeqeq:true,
				eqnull:true,
				strict:true,
				latedef:true,
				undef:true,
				globals: {
					force:true,
					jQuery: true,
					console:true,
					module:true,
					document:true,
					Ember:true,
					$:true,
					App:true
				}
			}
		},
		concat: {
			dist: {
				src:['app/library/jquery-1.9.1.js','app/library/handlebars-1.0.0-rc3.js','app/library/ember-1.0.0-rc2.js','app/app.js','debug/templates.js','app/controllers/*.js','app/views/*.js','app/routes/*.js'],
				dest:'debug/app.js'
			},
			test: {
				src:['app/tests/*.js'],
				dest:'qunit/tests.js'
			}
		},
		sass: {
			css: {
				files: {
					'debug/app.css':'app/css/base.scss'
				}
			}
		},
		ember_handlebars: {
			compile: {
				options: {
					processName: function(fileName) {
						var arr = fileName.split("."),
							path = arr[arr.length - 2].split("/"),
							name = path[path.length -1];
						return name;
					}
				},
				files: {
					"debug/templates.js":"app/templates/*.hbs"
				}
			}
		},
		clean: ["debug/images/", "release/images/"],
		copy: {
			main: {
				files: [
					{expand:true, cwd:'app/images/', src: ['**'], dest: 'debug/images/'},
					{expand:true, cwd:'app/images/', src: ['**'], dest: 'release/images/'}
				]
			}
		},
		uglify: {
			build: {
				src: 'debug/app.js',
				dest:'release/app.min.js'
			}
		},
		cssmin: {
			compress: {
				files: {
					"release/app.min.css":["debug/app.css"]
				}
			}
		},
		watch: {
			scripts: {
				files: ['app/library/*.js','app/*.js','app/controllers/*.js','app/views/*.js','app/routes/*.js','app/css/*.scss','app/templates/*.hbs', 'app/tests/*.js'],
				tasks: ['jshint','ember_handlebars','concat','sass','qunit'],
				options: {
					debounceDelay:300
				}
			},
			images: {
				files: ['app/images/*'],
				tasks:['clean', 'copy'],
				options: {
					debounceDelay:300
				}
			}
		},
		qunit: {
			all: ['qunit/index.html']
		},
		connect: {
			debug: {
				options: {
					port:9090,
					base:'debug'
				}
			},
			release: {
				options: {
					port:9091,
					base:'release'
				}
			},
			test: {
				options: {
					port:9092,
					base:'qunit'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-ember-handlebars');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.registerTask('default', ['jshint','ember_handlebars','concat','sass','clean','copy','connect','qunit','watch']);
	grunt.registerTask('release', ['uglify','cssmin','clean','copy']);
};
