var gulp         = require('gulp');
var concat       = require('gulp-concat');
var order        = require('gulp-order');
var config       = require('../../config').concatHead;

/**
 * Generate head.js and include the following files
 */
gulp.task('scriptsHead', function() {
  return gulp.src(config.src)
    .pipe(order([
      "modernizr.js"
    ]))
    .pipe(concat('head.js'))
    .pipe(gulp.dest(config.dest));
});
