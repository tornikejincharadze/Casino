'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var watchSass = require("gulp-watch-sass");
var minifyCSS = require('gulp-csso');
var rename = require('gulp-rename');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      fallback: 'index.html',
      livereload: true,
      open: true
    }));
});
 
gulp.task('sass', function () {
  return gulp.src('./app/src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('./app/dist/css'));
});

gulp.task("sass:watch", () => {
    gulp.watch([
      "./app/css/**/*.scss"
    ], ["sass"]);
  });

gulp.task('default', [ 'sass', 'webserver', 'sass:watch' ]);