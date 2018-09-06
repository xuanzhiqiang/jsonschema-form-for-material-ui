const gulp = require('gulp');
const path = require('path');
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('build', () => {
  return gulp.src('src/**/*.{js,jsx}')
    .pipe(babel({
      configFile: './.babelrc'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('test', ['build'], () => {
  return gulp.src('src/**/*.spec.js', { read: false })
    .pipe(mocha({
      require: path.resolve(__dirname, 'mocha.setup.js'),
      reporter: 'mochawesome',
      reporterOptions: {
        reportDir: 'mochawesome-report-unit',
      }
    }));
});
