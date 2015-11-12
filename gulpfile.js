/*------------------------------------*\
 - gulpfile.js -
 \*------------------------------------*/
/**
 *
 * Grunt configuration file.
 *
 * Used to monitor certain assets and perform tasks in order
 * to improve code quality and efficiency.
 *
 */




/**
 * 1. Get Packages
 */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
    rename = require('gulp-rename');




/**
 * 2. Set up default task
 */
gulp.task('default', ['watch']);




/**
 * 3 .Configure jshint, concat and uglify to do their thing on our JS files
 */
gulp.task('js', function() {
   return gulp.src(['app/**/*.js', '!app/bower_components/**/*.js'])
       .pipe(jshint())
       .pipe(jshint.reporter('jshint-stylish'))
       .pipe(sourcemaps.init())
            .pipe(concat('app.js'))
       .pipe(gulp.dest('app/assets/js'))
       .pipe(rename('app.min.js'))
           .pipe(ngAnnotate())
           .pipe(uglify())
       .pipe(sourcemaps.write())
       .pipe(gulp.dest('app/assets/js'))
});




/**
 * 4. Configure sass compilation
 */
gulp.task('build-css', function() {
    return gulp.src('app/assets/styles/sass/app.scss')
        .pipe(sourcemaps.init()) // Process the original source
            .pipe(sass())
        .pipe(sourcemaps.write()) // Add the map to modified source
        .pipe(gulp.dest('app/assets/styles/css'));
});




/**
 * 5. Configure watch to listen certain files
 */
gulp.task('watch', function() {

    // Watch for change in JS files but exclude bower_components
    gulp.watch(['app/**/*.js', '!app/bower_components/**/*.js'], ['js']);

    // Watch for changes in ou .scss files
    gulp.watch('app/assets/styles/sass/*.scss', ['build-css']);

});