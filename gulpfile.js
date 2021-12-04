const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const minifyImg = require('gulp-imagemin');
const minifyJS = require('gulp-uglify');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const runSequence = require('run-sequence');


// gulp.task("browser-sync", () => {
//     browserSync.init({
//         server: {
//             baseDir: "dist",
//         },
//     });
// });

gulp.task("css", () => {
    return gulp
        .src("file/css/sass/**/*.scss")
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(concat("app.min.css"))
        .pipe(gulp.dest("dist/file/css"));
});

gulp.task("js", () => {
    return gulp
        .src("file/js/app/*.js")
        .pipe(concat("app.min.js"))
        .pipe(minifyJS())
        .pipe(gulp.dest("dist/file/js"));
});

gulp.task("html", () => {
    return gulp.src("*.html").pipe(gulp.dest("dist"))
        .pipe(browserSync.stream());
});

gulp.task("img", () => {
    gulp
        .src("file/image/**/*")
        .pipe(minifyImg())
        .pipe(gulp.dest("dist/file/image"));
});

gulp.task("delete", () =>
    del(["dist/file/css", "dist/file/js", "dist/file/image", "dist/file/*.html"])
);

gulp.task("watch", () => {
    gulp.watch("*.html", ["html"]);
    gulp.watch("file/image/**/*", ["img"]);
    gulp.watch("file/js/*.js", ["js"]);
    gulp.watch("file/css/sass/**/*.scss", ["css"]);
});

gulp.task("default", () => {
    runSequence(["delete", "html", "css", "js", "img", "watch"]);
});