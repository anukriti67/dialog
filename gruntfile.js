module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    build: {
      src: 'src/<%= pkg.name %>.js',
      dest: 'build/<%= pkg.name %>.min.js'
    },
    copy: {
      main: {
        files : [
          {

            cwd: '.',
            src: './build/bundle1.js',
            dest: '//chinar-svr/transer/anbajpai/bundle1.js'
          }
        ]
      }
    }

  });
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask("copyall", ['copy:main']);
  // Default task(s).

};
