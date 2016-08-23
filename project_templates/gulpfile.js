var gulp = require('gulp');
var webpack = require('webpack-stream');
gulp.task('default', function() {
  return gulp.src('app/app.js')
    .pipe(webpack({watch: true, output: { filename: 'dist.js' }}))
    .pipe(gulp.dest('dist/'));
});