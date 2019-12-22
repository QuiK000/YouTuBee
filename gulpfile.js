const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// саске в сиэсэс

const compiler = () => {
  return gulp.src('./scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./scss/css/'))
  .pipe(browserSync.stream())
}

const watch = () => {
  browserSync.init({
    server: {
      baserDir: './'
    }
  })
  /* саске */
  gulp.watch('./scss/**/*.scss', compiler);
  /* шмель */
  gulp.watch('./*.html').on('change', browserSync.reload);
  /* жаба */
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.compiler = compiler;
exports.watch = watch;