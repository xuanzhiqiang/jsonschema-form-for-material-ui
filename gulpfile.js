const gulp = require('gulp');
const path = require('path');
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');

gulp.task('build', () =>
  gulp
    .src('src/**/*.{js,jsx}')
    .pipe(
      babel({
        envName: process.env.NODE_ENV || 'production',
        configFile: './.babelrc'
      })
    )
    .pipe(gulp.dest('dist'))
);

gulp.task(
  'test',
  gulp.series(['build'], () =>
    gulp.src('src/**/*.spec.{js,jsx}', { read: false }).pipe(
      mocha({
        require: path.resolve(__dirname, 'mocha.setup.js'),
        reporter: 'mochawesome',
        reporterOptions: {
          reportDir: 'mochawesome-report-unit'
        }
      })
    )
  )
);
