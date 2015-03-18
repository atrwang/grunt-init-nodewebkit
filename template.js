/*
 * grunt-init-gruntfiles
 * http://www.plaso.com/
 *
 * Copyright (c) 2015 "Plaso" kevin
 */

'use strict';

// Basic template description.
exports.description = 'Create a basic Gruntfile and package.json';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'This template will create a basic Gruntfile.js and a basic package.json';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = ['Gruntfile.js', 'package.json'];


// The actual init template.
exports.template = function (grunt, init, done) {

    grunt.file.mkdir('./src');
    grunt.file.mkdir('./src/models');
    grunt.file.mkdir('./src/views');
    grunt.file.mkdir('./src/controllers');
    
    grunt.file.mkdir('./dist');
    
    grunt.file.mkdir('./templates');
    grunt.file.mkdir('./libs');
    grunt.file.mkdir('./resources');
    grunt.file.mkdir('./resources/css');
    grunt.file.mkdir('./resources/img');
    

    init.process({}, [], function (err, props) {


        // Files to copy (and process).
        var files = init.filesToCopy(props);

        // Actually copy (and process) files.
        init.copyAndProcess(files, props);

        var devDependencies = {
            'grunt': '~0.4.5',
            'grunt-contrib-watch': '~0.6.1',
            "grunt-ember-templates": '~0.4.21',
            "grunt-contrib-jshint": '^0.11.0',
            "grunt-contrib-uglify": '^0.7.0',
            "grunt-contrib-less": '^1.0.0',
        };

        // Generate package.json file, used by npm and grunt.
        init.writePackageJSON('./libs/package.json', {
            name: 'my-project-name',
            version: '0.1.0',
            devDependencies: devDependencies
        });

        // All done!
        done();
    });

};