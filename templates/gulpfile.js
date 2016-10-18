/*
 * initPro - Initial webproject boilerplate
 * https://github.com/filipeceoli/initpro
 * Copyright (c) 2016, Filipe Cezar
 * License: GPL v3
 */

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var cleanCSS = require('gulp-clean-css');
var cache = require('gulp-cache');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');
var del = require('del');

//Development Tasks
gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('clear', function(){
  return del.sync('dist/assets/images', 'dist/assets/css');
});

//Optimization Tasks
gulp.task('images', function(){
  return gulp.src('app/assets/images/**/*.+(png|jpg|jpeg|svg)')
  .pipe(cache(imagemin()))
  .pipe(gulp.dest('dist/assets/images'))
});

gulp.task('cleancss', function(){
  return gulp.src('app/assets/css/*.css')
  .pipe(cleanCSS())
  .pipe(gulp.dest('dist/assets/css'))
  .pipe(browserSync.reload ({
    stream: true
  }))
});

//Watchers
gulp.task('watch', ['images', 'cleancss', 'browserSync'], function(){
  gulp.watch('app/assets/images/**/*.+(png|jpg|jpeg|svg)', ['images']);
  gulp.watch('app/assets/css/*.css', ['cleancss']);
  gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('default', function(){
  gulp.start('watch');
});

gulp.task('build', function(callback){
  runSequence('clear', ['images', 'cleancss'], callback
  )
});
