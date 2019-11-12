var gulp = require('gulp'),
    compass = require('gulp-compass');
gulp.task('compass', function () {
    return gulp.src('src/styles/main.sass') // src for sass
        .pipe(compass({
            sass: 'src/styles',
            image: 'src/images',
            css: 'dist/css',
            // sourcemap: true,
            // style: 'compressed'
        }));
});
gulp.task('default', function () {
    gulp.watch('src/css/**/*.sass', gulp.series(['compass']));// src for sass
});
