'use strict'
var gulp = require('gulp');
var react = require('gulp-react');
var using = require('gulp-using');
gulp.task('watch', function () {
    //ファイルが変更されたらメッセージ表示
    var jsDir = './public/javascripts';
    gulp.watch('*', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        return gulp.src(jsDir + 'src/*.jsx'  )
        .pipe(react())
        .pipe(gulp.dest(jsDir + 'dest/'));
    });
});

gulp.task('dist', function (){

});
gulp.task('default', function () {
    gulp.run('watch');
});
