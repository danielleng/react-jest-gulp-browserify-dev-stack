"use strict";

// GULP Readme: https://github.com/gulpjs/gulp/tree/master/docs/recipes

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var jest = require('gulp-jest').default;

var paths = {
    appjs: 'js/app.js',
    cleanpath: 'js',
    scripts: ['js/*.js', '!js/vendor', '!js/plugins.js', '!js/*.test.js'],
    images: 'img'
};

gulp.task('clean', function () {
    return browserify({entries: paths.appjs, extensions: ['.js'], debug: true})
        .transform(babelify)                    // Babel transform
        .bundle()                               // Compile browserify
        .pipe(source('bundle.js'))               
        .pipe(gulp.dest(paths.cleanpath));      // use gulp.dest to set destination
});

gulp.task('build', function() {
    // Clean first
    // Copy files to dist
});

// https://www.npmjs.com/package/gulp-jest
gulp.task('test', function() {
    return gulp.src(paths.cleanpath)
        .pipe(jest({
            "preprocessorIgnorePatterns": [
                "<rootDir>/dist/", "<rootDir>/node_modules/", "<rootDir>/vendor/"
            ],
            "automock": false
        }))
});

gulp.task('watch', ['clean'], function () {
    gulp.watch(paths.scripts, ['clean']);
});

gulp.task('default', ['watch']);