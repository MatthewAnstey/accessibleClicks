// Project configuration.
'use strict';
module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            options: {
                globals: {
                    jQuery: true
                },
            },
            src: ['accessibleClicks.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint']);
}