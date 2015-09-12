var gulp = require('gulp'), // Responsible for build process
    gutil = require('gulp-util'), // Responsible for logging progress on console
    source = require('vinyl-source-stream'), // Handles passing files from one part of the build to another
    browserify = require('browserify'), // Load order
    watchify = require('watchify'), // Tool that automatically reruns gulpfile whenever we make changes to the code
    reactify = require('reactify'); // Works with browserify to convert jsx to js

gulp.task('default', function() {
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'],
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  function build(file) {
    if (file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('main.js'))
      .pipe(gulp.dest('./'));
  };
  
  build();
  bundler.on('update', build);
});
