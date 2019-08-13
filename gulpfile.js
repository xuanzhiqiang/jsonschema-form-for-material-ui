const gulp = require('gulp');
const path = require('path');
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');

const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const del = require('del');

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

// Images打包压缩代码
gulp.task('images', () =>
  gulp
    .src('src/image/*')
    .pipe(
      cache(
        imagemin({
          optimizationLevel: 3,
          progressive: true,
          interlaced: true
        })
      )
    )
    .pipe(gulp.dest('dist/image'))
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

gulp.task('clean', cb => del(['dist/'], cb));
