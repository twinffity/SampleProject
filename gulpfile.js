var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var paths = {
    src: {
        scss: "./src/styles/*.scss",
        css: "./src/styles/*.css",
        js: "./src/scripts/*.js",
        html: "./src/**/*.html",
        jpg: "./src/**/*.jpg"
    },
    dist: {
        root: "./dist/",
        css: {
            folder: "./dist/styles/",
            files: './dist/styles/*.css'
        },
        js: {
            folder: "./dist/scripts/",
            files: './dist/scripts/*.js'
        },
        html: {
            files: "./dist/**/*.html"
        },
        jpg: {
            files: "./dist/**/*.jpg"
        }
    }
};

gulp.task('sass', function() {
    return gulp.src(paths.src.scss)
        .pipe(sass())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
});

gulp.task('cssmin', ['sass'], function(){
    return gulp.src(paths.src.css)
        .pipe(cssmin())
        .pipe(gulp.dest(paths.dist.css.folder));
});

gulp.task('js', [], function(){
    return gulp.src(paths.src.js)
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist.js.folder));
});

gulp.task('other', [], function(){
    return gulp.src([paths.src.html, paths.src.jpg])
        .pipe(gulp.dest(paths.dist.root));
});

gulp.task('default', ['cssmin', 'js', 'other'], function() {
    gulp.watch(paths.src.scss, ['cssmin']);
    gulp.watch(paths.src.js, ['js']);
    gulp.watch([paths.src.html, paths.src.jpg], ['other']);
});