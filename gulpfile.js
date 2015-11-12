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
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    sourcemaps = require('gulp-sourcemaps');




/**
 * 2. Set up default task
 */
gulp.task('default', ['watch']);




/**
 * 3 .Configure jshint to watch all of our JS files and exclude bower_components
 */
gulp.task('jshint', function() {
   return gulp.src(['app/**/*.js', '!app/bower_components/**/*.js'])
       .pipe(jshint())
       .pipe(jshint.reporter('jshint-stylish'));
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
 * 4. Configure watch to listen certain files
 */
gulp.task('watch', function() {

    // Watch for change in JS files but exclude bower_components
    gulp.watch(['app/**/*.js', '!app/bower_components/**/*.js'], ['jshint']);

    // Watch for changes in ou .scss files
    gulp.watch('app/assets/styles/sass/*.scss', ['build-css']);

});