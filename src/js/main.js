$(document).ready(function() {
	$('.tabs-head__item a').click(function(event) {
		if (!$(this).parent().hasClass('active')) {
			$('.tabs-head__item').removeClass('active');
			$(this).parent().addClass('active');
			var id = $(this).attr('href');
			$('.tabs-content__item').removeClass('active');
			$(id).addClass('active').css('opacity', 0);
			setTimeout(function() {
				$(id).css('opacity', 1);
			}, 100)
		}
	})
})