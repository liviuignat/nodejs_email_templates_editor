'use strict';

var gulp = require('gulp');
var paths = gulp.paths;
var $ = require('gulp-load-plugins')();

gulp.task('styles', function() {
  return gulp.src([
      paths.src + '/index.less',
      paths.src + '/vendor.less'
    ])
    .pipe($.plumber())
    .pipe($.less())
    .pipe($.autoprefixer())
    .pipe(gulp.dest(paths.tmp));
});
