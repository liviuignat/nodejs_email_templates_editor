'use strict';

var gulp = require('gulp');
var paths = gulp.paths;
var util = require('util');
var browserSync = require('browser-sync');
var paths = gulp.paths;

gulp.task('serve', ['watch'], function () {
  browserSync({
    proxy: 'localhost:8090',
    port: 3000,
    files: [
      paths.tmp + '/*.css',
      paths.tmp + '/**/*.css',
      paths.tmp + '/*.js',
      paths.tmp + '/**/*.js',
      paths.tmp + '/*.html'
    ],
    open: true,

    browser: "google chrome"
  });
});

gulp.task('serve:prod', ['watch:prod'], function () {
  browserSync({
    proxy: 'localhost:8090',
    port: 3000,
    files: [
      paths.tmp + '/*.css',
      paths.tmp + '/**/*.css',
      paths.tmp + '/*.js',
      paths.tmp + '/**/*.js',
      paths.tmp + '/*.html'
    ],
    open: true,

    browser: "google chrome"
  });
});
