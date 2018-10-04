module.exports = function () {
	$.gulp.task('fonts:dev', function () {
		return $.gulp.src('src/fonts/*.{ttf,otf,eot,woff,woff2}')
        .pipe($.gulp.dest('build/fonts/'));
	})

	$.gulp.task('fonts:build', function () {
		return $.gulp.src('src/fonts/*.{ttf,otf,eot,woff,woff2}')
        .pipe($.gulp.dest('build/fonts/'));
	})
}