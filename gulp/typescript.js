'use strict';

var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');

gulp.task('typescript', function () {
  var tsResult = gulp.src('./server/**/*.ts')
    .pipe(ts({
      removeComments: false,
      target: 'ES5',
      declarationFiles: false,
      noExternalResolve: true
    }));

  return merge([
    tsResult.js.pipe(gulp.dest('./server'))
  ]);
});
