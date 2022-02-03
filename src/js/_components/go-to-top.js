// ========== Scroll-to-top button ==========
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 150) {
			$('.js-btn-up').fadeIn();
		} else {
			$('.js-btn-up').fadeOut();
		}
		
	});

	$('.js-go-to-top-btn').on('click', function (e) { 
		e.preventDefault();
		$('body, html').animate({
			scrollTop: 0
		}, 2000);
	});
	// ========= =========== =========== ===========