'use strict';

var gulp = require('gulp');

gulp.paths = {
  bower: 'server/public/bower',
  src: 'server/public/src',
  dist: 'server/public/dist',
  tmp: 'server/public/dev'
};

require('require-dir')('./gulp');

gulp.task('default', [''], function () {
  gulp.start('typescript');
});
