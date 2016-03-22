var gulp   = require('gulp');
var config = require('../../config').watch;

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.jekyll,             ['jekyll-rebuild']);
  //gulp.watch(config.sass,             ['sass', 'scsslint']);
  gulp.watch(config.sass,               ['sass']);
  gulp.watch('app/_jadefiles/*.jade',   ['jade']);
  gulp.watch(config.scriptsHead,        ['scriptsHead', 'jshint']);
  gulp.watch(config.scriptsFooter,      ['scriptsFooter', 'jshint']);
  //gulp.watch(config.scripts,            ['scripts', 'jshint']);
  gulp.watch(config.images,             ['images']);
  gulp.watch(config.sprites,            ['sprites']);
});
