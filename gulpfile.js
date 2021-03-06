'use strict'
var gulp = require('gulp')
var del = require('del')
var $ = require('gulp-load-plugins')()

gulp.task('react', function () {
  return gulp.src('./src/jsx/*jsx')
  .pipe($.plumber())
  .pipe($.sourcemaps.init())
  .pipe($.react())
  .pipe($.sourcemaps.write('.'))
  .pipe(gulp.dest('./public/javascripts/dest/'))
})

gulp.task('clean-js-dest', function (cb) {
  del(['./public/javascripts/dest/*'], cb)
})


gulp.task('watch', function () {
  var watcher = gulp.watch('./src/**/*', ['compile'])
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
  })
})

gulp.task('clean', ['clean-js-dest'])
gulp.task('compile', ['react'])
gulp.task('dist', ['clean', 'compile'])
gulp.task('default', ['compile', 'watch'])
