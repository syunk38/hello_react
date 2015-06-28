'use strict'
var gulp = require('gulp')
var rimraf = require('rimraf')
var plumber = require('gulp-plumber')  // エラー発生時もタスクを継続する

gulp.task('react', function () {
  var react = require('gulp-react')
  var sourcemaps = require('gulp-sourcemaps')

  return gulp.src('./src/jsx/*jsx')
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(react())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./public/javascripts/dest/'))
})

gulp.task('clean-js-dest', function (cb) {
  rimraf('./public/javascripts/dest/', cb)
})

gulp.task('clean', function() {

})

gulp.task('watch', function () {
  var watcher = gulp.watch('./src/**/*', ['react'])
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
  })
})

gulp.task('dist', ['clean'], function (){
  gulp.dest('react')
})

gulp.task('default', function () {
  gulp.run('watch')
})
