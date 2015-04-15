var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*']
});

gulp.task('test-server', function() {
  process.env.NODE_ENV = 'test';
  gulp.src(['./server/tests/*.js'])
    .pipe($.mochaCo({
      reporter: 'nyan'
    }))
    .pipe($.exit());
});
