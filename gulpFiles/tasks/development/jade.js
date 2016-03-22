var gulp         = require('gulp');
var jade         = require('gulp-jade');
var config       = require('../../config').jade;

// =====================================
// Jade Task
// =====================================

gulp.task('jade', function() {
  return gulp.src(config.src)
  .pipe(jade(config.options))
  .pipe(gulp.dest(config.dest));
});
