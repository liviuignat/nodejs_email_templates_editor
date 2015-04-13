'use strict';

var gulp = require('gulp');

gulp.paths = {
  bower: 'server/public/bower',
  src: 'server/public/dev',
  dist: 'server/public/.dist',
  tmp: 'server/public/.tmp',
  views: 'server/views',
};

require('require-dir')('./gulp');

gulp.task('default', [''], function() {
  gulp.start('typescript');
});
