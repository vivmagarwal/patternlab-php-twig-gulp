var gulp = require('gulp');
var sass = require('gulp-sass');
// var autoprefixer = require('gulp-autoprefixer');
// var sourcemaps = require('gulp-sourcemaps');
// var concat = require('gulp-concat');
// var clean = require('gulp-clean');
var sassGlob = require('gulp-sass-glob');

gulp.task('sass', function () {
  return gulp.src('source/css/style.scss')
  // .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
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


gulp.task('watch', function(){
  gulp.watch('source/_patterns/**/*.scss', ['sass']);
});

