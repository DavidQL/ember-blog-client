module.exports = function(grunt) {
	'use strict';
	//All grunt related functions

	grunt.initConfig({
		jshint: {
			files: ['gruntfile.js', 'app/controllers/*.js', 'app/*.js', 'app/views/*.js', 'app/routes/*.js'],
			options: {
				eqeqeq: true,
				eqnull: true,
				latedef: true,
				undef: true,
				globalstrict:true,
				force:true,
				globals: {
					jQuery: true,
					console: true,
					module: true,
					document: true,
					Ember: true,
					$: true,
					App: true
				}
			}
		},
		concat: {
			vendor: {
				src: ['app/library/jquery-1.9.1.js',  'app/library/jquery-cookie.js', 'app/library/handlebars-1.1.2.js', 'app/library/ember-1.4.0.js', 'app/library/ember-data.js'],
				dest:'debug/lib.js'
			},
			app: {
				src: ['app/app.js', 'debug/templates.js', 'app/router.js', 'app/adapters/*.js', 'app/controllers/*.js', 'app/views/*.js', 'app/routes/*.js', 'app/models/*.js'],
				dest:'debug/app.js'
			},
			test: {
				src: ['app/tests/*.js'],
				dest: 'qunit/tests.js'
			},
			testLib: {
				src:'debug/lib.js',
				dest:'qunit/lib.js'
			},
			testApp: {
				src:'debug/app.js',
				dest:'qunit/app.js'
			}
		},
		sass: {
			css: {
				files: {
					'debug/app.css': 'app/css/base.scss'
				}
			}
		},
		ember_handlebars: {
			compile: {
				options: {
					processName: function(fileName) {
						var arr = fileName.split("."),
							path = arr[arr.length - 2].split("/"),
							name = path[path.length - 1],
							isComponents = path.indexOf('components') > -1;
						if(isComponents) {
							return 'components/' + name;
						}
						else {
							return name;
						}
					}
				},
				files: {
					"debug/templates.js": ["app/templates/*.hbs","app/templates/components/*.hbs"]
				}
			}
		},
		clean: ["debug/images/", "release/images/"],
		copy: {
			main: {
				files: [{
					expand: true,
					cwd: 'app/images/',
					src: ['**'],
					dest: 'debug/images/'
				}, {
					expand: true,
					cwd: 'app/images/',
					src: ['**'],
					dest: 'release/images/'
				}]
			}
		},
		uglify: {
			build: {
				src: ['debug/lib.js','debug/app.js'],
				dest: 'release/app.min.js'
			}
		},
		cssmin: {
			combine: {
				files: {
					"debug/app.css": ['debug/app.css', 'app/css/bootstrap-min.css']
				}
			},
			compress: {
				files: {
					"release/app.min.css": "debug/app.css",
				}
			}
		},
		qunit: {
			all: {
				options: {
					urls: [
						'http://localhost:9092/index.html'
					],
					force:true
				}
			}
		},
		watch: {
			scripts: {
				files: ['app/library/*.js', 'app/*.js', 'app/controllers/*.js', 'app/views/*.js', 'app/routes/*.js', 'app/css/*.scss', 'app/css/*.css', 'app/templates/**/*.hbs', 'app/tests/*.js', 'app/adapters/*.js', 'app/models/*.js'],
				tasks: ['ember_handlebars','concat', 'sass', 'cssmin'],
				options: {
					debounceDelay: 100
				}
			},
			tests: {
				files: ['app/tests/*.js'],
				tasks: ['qunit'],
				options: {
					debounceDelay: 100
				}
			},
			images: {
				files: ['app/images/*'],
				tasks: ['clean', 'copy'],
				options: {
					debounceDelay: 100
				}
			}
		},
		connect: {
			debug: {
				options: {
					port: 9090,
					base: 'debug'
				}
			},
			release: {
				options: {
					port: 9091,
					base: 'release'
				}
			},
			test: {
				options: {
					port: 9092,
					base: 'qunit'
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
	grunt.loadNpmTasks('grunt-ember-handlebars');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-qunit');

	grunt.registerTask('default', ['ember_handlebars', 'concat', 'sass', 'clean', 'copy', 'connect', 'cssmin', 'watch']);
	grunt.registerTask('release', ['jshint','uglify', 'cssmin', 'clean', 'copy']);
};