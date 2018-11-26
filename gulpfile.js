var gulp = require('gulp');
var sass = require('gulp-sass');
// var autoprefixer = require('gulp-autoprefixer');
// var clean = require('gulp-clean');
var sassGlob = require('gulp-sass-glob');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

gulp.task('sass', function () {
  return gulp.src('source/css/style.scss')
  // .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass())
      .on('error', function (errorInfo) {
        console.log(errorInfo.toString());
        this.emit('end');
      })
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('source/css'));
});

// gulp.task('clean', function () {
//   return gulp.src('tmp/css/**', {read: false})
//     .pipe(clean());
// });


// gulp.task('styles', function() {
//   return gulp.src('tmp/css/**/*.css')
//       .pipe(concat('style.css'))
//       .pipe(gulp.dest('dist/css'));
// });

gulp.task('scripts', function() {
  return gulp.src('source/_patterns/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('scripts.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('source/js'));
});

gulp.task('watch', function(){
  gulp.watch(['source/_patterns/**/*.scss','source/_patterns/**/*.js'], ['sass','scripts']);
});
