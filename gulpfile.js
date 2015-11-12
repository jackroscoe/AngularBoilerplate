

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
     * CONTENTS
     * --------
     * 1. Get Packages
     * 2. Set up default task
     * 3 .Configure jshint, concat and uglify to do their thing on our JS files
     * 4. Configure sass compilation
     * 5. Configure watch to listen certain files
     *
     */




    /**
     * 1. Get Packages
     */
    var gulp = require('gulp'),
        // Compiles our sass
        sass = require('gulp-sass'),
        // JS linting
        jshint = require('gulp-jshint'),
        // Sourc emapping for example JS and CSS
        sourcemaps = require('gulp-sourcemaps'),
        // Concatenation of multiple files
        concat = require('gulp-concat'),
        // Minification of JS files
        uglify = require('gulp-uglify'),
        // Preservence of Angular keywords during minification process
        ngAnnotate = require('gulp-ng-annotate'),
        // Rename files before continuing to save
        rename = require('gulp-rename'),
        // Auto-prefix CSS rules using supplied rules
        autoprefixer = require('gulp-autoprefixer'),
        // Minification of CSS files
        minifyCSS = require('gulp-minify-css');




    /**
     * 2. Set up default task
     */
    gulp.task('default', ['watch']);




    /**
     * 3 .Configure jshint, concat and uglify to do their thing on our JS files
     */
    gulp.task('js', function() {

       // Use all JS files in /app and ignore bower_components
       return gulp.src(['app/**/*.js', '!app/bower_components/**/*.js'])
           // Run jshint
           .pipe(jshint())
           // Use the stylish plugin to re-format the CLI output and increase legiblity
           .pipe(jshint.reporter('jshint-stylish'))
           // Process the original source
           .pipe(sourcemaps.init())
                // Concat all files into one
                .pipe(concat('app.js'))
           // Save app.js in specified destination
           .pipe(gulp.dest('app/assets/js'))
           // Create a copy called app.in.js
           .pipe(rename('app.min.js'))
                // Make sure to preserve certain Angular component names during the minification process
               .pipe(ngAnnotate())
                // Minify the contents
               .pipe(uglify())
           // Write the sourcemap
           .pipe(sourcemaps.write())
           // Save our new app.min.js file into app/assets/js
           .pipe(gulp.dest('app/assets/js'))

    });




    /**
     * 4. Configure sass compilation
     */
    gulp.task('build-css', function() {

        // Focus entirely on app.scss
        return gulp.src('app/assets/styles/sass/app.scss')
            // Compile the .scss
            .pipe(sass())
            // Place the compiled file in specified location
            .pipe(gulp.dest('app/assets/styles/css'))
            // Process the original source
            .pipe(sourcemaps.init())
                // Minify the CSS
                .pipe(minifyCSS())
            // Write the source map into the file
            .pipe(sourcemaps.write())
            // Rename the current file
            .pipe(rename('app.min.css'))
            // Add prefixes where necessary
            .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
            // Save the renamed, prefixed file to the specified destination
            .pipe(gulp.dest('app/assets/styles/css'))

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