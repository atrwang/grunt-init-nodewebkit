module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        emberTemplates: {
            compile: {
                options: {
                    templateBasePath: 'templates/'
                },
                files: {
                    'js/templates.js': 'templates/**/*.hbs' // 将 tempaltes 目录下所有的 hbs 文件一同编译到 xxx/templates.js 文件中
                }
            }
        },
        jshint: {
                all: ['Gruntfile.js', 'libs/*.js', 'controller/*.js', 'view/*.js', '*.js'],
                options: {
                     curly: true,
                     boss: true,
                     unused:true,
                     nonew:true
                }
        },
        uglify: {
                options: {
                     compress: {
                        drop_console: true
                     }
                },
                spec: {
                     files: {
                     'dest/output.min.js': ['libs/test.js', 'libs/test2.js']
                     }
                }
        },
        shell: {
                options: {
                     stderr: false
                },
                zip: {
                     command:'zip -q -r app.nw libs resources src templates application.js config.js index.html package.json loading.html router.js'
                },
                move: {
                     command:'mv -f app.nw /Users/kevin/Desktop/plaso_compose.app/Contents/Resources/app.nw'
                }
        },
        less: {
                all: {
                     options: {
                     paths: ["assets/css"]
                    },
                    files: {
                     "path/to/result.css": "path/to/source.less"
                     }
                }
        },
        watch: {
                     
            hbs:{
                     files: ['templates/**/*.hbs'],
                     tasks: ['emberTemplates:compile']
            },
            jshint:{
                     files: ['Gruntfile.js', 'libs/*.js', 'controllers/*.js', 'view/*.js', '*.js'],
                     tasks: ['jshint:all']
            },
            uglify:{
                     files: ['libs/test.js', 'libs/test2.js'],
                     tasks: ['uglify:spec']
            },
            shell:{
                     files: ['libs/**/*', 'resources/**/*', 'src/**/*', 'templates/**/*', 'application.js', 'config.js','index.html', 'package.json', 'loading.html', 'router.js'],
                     tasks: ['shell:zip','shell:move']
            },
            less:{
                     files: ['resources/*.css'],
                     tasks: ['less:all']
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ember-templates');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['emberTemplates','jshint','uglify','shell','less']);
};