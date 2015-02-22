module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        jshint: {
            options: {
                globals: {
                    jQuery: true
                },
            },
            src: ['js/accessibleClicks.js', 'gruntFile.js']
        },
        uglify: {
            my_target: {
                options: {
                    mangle: false
                },
                files: {
                    'js/accessibleClicks.min.js': ['js/accessibleClicks.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint', 'uglify']);

};