const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('sass/**/*.scss');
});