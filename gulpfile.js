// var gulp = require('gulp'),
//     compass = require('gulp-compass');
// gulp.task('compass', function () {
//     return gulp.src('src/styles/main.sass') // src for sass
//         .pipe(compass({
//             sass: 'src/styles',
//             image: 'src/images',
//             css: 'dist/css',
//             // sourcemap: true,
//             // style: 'compressed'
//         }));
// });
// gulp.task('default', function () {
//     gulp.watch('src/css/**/*.sass', gulp.series(['compass']));// src for sass
// });

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
//convert scss files to css
gulp.task('sass',function(){
return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
  .pipe(sass())
  .pipe(gulp.dest('src/css'))
  .pipe(browserSync.stream());
});

// //move js files to the src
gulp.task('js',function(){
return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.js','node_modules/popper.js/dist/popper.js', 'node_modules/jquery/dist/jquery.js' ])
  .pipe(gulp.dest('src/js'))
  .pipe(browserSync.stream());
});

//server implementation
gulp.task('serve',gulp.series('sass'),function(){
  browserSync.init({
  server:"./src"
});

gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], gulp.series('sass'));
   gulp.watch('src/*.html').on('change', browserSync.reload);
});

//start server
gulp.task('default',gulp.series('js','serve'));
