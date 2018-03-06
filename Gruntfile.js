'use strict';

var baseDir = 'src/img_source', // <-- Set to your SVG base directory
   svgGlob = '**/*.svg', // <-- Glob to match your SVG files
   outDir = 'output/dir', // <-- Main output directory
   config = {
      "dest": "src",
      "mode": {
         "symbol": {
            "dest": "img",
            "inline": false,
            "example": true,
            "sprite": "svg/sprite.symbol.html",
            "render": {
               "css": true // Render a Sass stylesheet
            }
         }
      },
      "svg": {
        xmlDeclaration: false,
        doctypeDeclaration: false
     }
   };

module.exports = function(grunt) {

   // Project configuration
   grunt.initConfig({

      // svg-sprite configuration
      svg_sprite: {
         dist: {
            expand: true,
            cwd: baseDir,
            src: [svgGlob],
            dest: outDir,
            options: config
         }
      }
   });

   // These plugins provide necessary tasks
   grunt.loadNpmTasks('grunt-svg-sprite');

   // By default, compile the sprite(s)
   grunt.registerTask('default', ['svg_sprite']);
};