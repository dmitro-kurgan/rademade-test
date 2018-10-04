module.exports = function() {
	$.gulp.task('watch', function() {
		$.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'));
		$.gulp.watch('src/scss/**/*.scss', $.gulp.series('sass'));
		$.gulp.watch('src/js/main.js', $.gulp.series('scripts'));
		$.gulp.watch('src/fonts/*', $.gulp.series('fonts:dev'));
		$.gulp.watch('src/img/*', $.gulp.series('img:dev'));
	});
}