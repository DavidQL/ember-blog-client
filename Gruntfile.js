module.exports = function(grunt) {
	//All grunt related functions

	grunt.initConfig({
		jshint: {
			files: ['gruntfile.js', 'app/controllers/*.js','app/*.js','app/views/*.js','app/routes/*.js'],
			options: {
				globals: {
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
				src:['app/library/jquery-1.9.1.js','app/library/handlebars-1.0.0-rc3.js','app/library/ember-1.0.0-rc1.js','app/app.js','debug/templates.js','app/controllers/*.js','app/views/*.js','app/routes/*.js'],
				dest:['debug/app.js']
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
						console.log(name);
						return name;
					}
				},
				files: {
					"debug/templates.js":"app/templates/*.hbs"
				}
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
			files: ['app/*.js','app/css/*.scss','app/templates/*.hbs'],
			tasks: ['jshint','ember_handlebars','concat','sass'],
			options: {
				debounceDelay:300
			}
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
	grunt.registerTask('default', ['connect','watch']);
	grunt.registerTask('release', ['uglify','cssmin']);
};