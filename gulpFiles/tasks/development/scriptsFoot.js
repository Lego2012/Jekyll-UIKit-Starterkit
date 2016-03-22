var gulp         = require('gulp');
var concat       = require('gulp-concat');
var order        = require('gulp-order');
var config       = require('../../config').concatFooter;

/**
 * Generate footer.js and include the following files
 */
gulp.task('scriptsFoot', function() {
  return gulp.src(config.src)
    .pipe(order([
      "jquery.js",
      "cycle2.js"
    ]))
    .pipe(concat('foot.js'))
    .pipe(gulp.dest(config.dest));
});
