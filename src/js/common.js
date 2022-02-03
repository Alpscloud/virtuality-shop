$(document).ready(function() {
	//  ========= Variables =========
	var body = $('body'),
			html = body.width(),
			timer; // for disable scroll
	// ========= =========== =========== ===========

	// Disable hover effect when client scrolles the page
	$(window).on('scroll',function() {
		clearTimeout(timer);
		if(!body.hasClass('disable-hover')) {
			body.addClass('disable-hover');
		}

		timer = setTimeout(function() {
			body.removeClass('disable-hover');
		}, 200);
	});


	// Toogle
	$('.js-toggle-mobile-search-btn').on('click', function(e) {
		e.preventDefault();

		$('.js-search').toggleClass('is-opened');
	});

	$('.js-toggle-product-card-labels-btn').on('click', function(e) {
		e.preventDefault();

		$(this).parents('.product-labels').find('.product-label__hidden').toggleClass('is-toggled');
		$(this).toggleClass('is-toggled');
	});


	// Sliders

	if ($('.js-promo-slider').length > 0) {
		$('.js-promo-slider').slick({
			infinite: true,
			dots: true,
			appendDots: $('.js-promo-slider-pagination'),
			prevArrow: $('.js-promo-slider-btn-prev'),
			nextArrow: $('.js-promo-slider-btn-next'),
			autoplay: true,
			autoplaySpeed: 5000
		});
	}

	if ($('.js-promo-slider-full').length > 0) {
		$('.js-promo-slider-full').slick({
			infinite: true,
			dots: true,
			appendDots: $('.js-promo-slider-full-pagination'),
			prevArrow: $('.js-promo-slider-full-btn-prev'),
			nextArrow: $('.js-promo-slider-full-btn-next'),
			autoplay: true,
			centerMode: true,
			variableWidth: true,
			autoplaySpeed: 8000
		});
	}

	if ($('.js-advantages-slider').length > 0) {
		$('.js-advantages-slider').slick({
			infinite: true,
			dots: true,
			arrows: false,
			slidesToShow: 5,
			appendDots: $('.js-advantages-slider-pagination'),
			autoplay: true,
			autoplaySpeed: 5000
		});
	}

	if ($('.js-promo-products-cards-slider').length > 0) {
		$('.js-promo-products-cards-slider').slick({
			infinite: true,
			dots: true,
			arrows: false,
			arrows: false,
			appendDots: $('.js-promo-products-cards-slider-pagination')
		});
	}

	if ($('.js-products-cards-slider').length > 0) {

		$('.js-products-cards-slider').each(function() {
			var self = $(this);

			self.slick({
				infinite: true,
				slidesToShow: 5,
				dots: true,
				appendDots: self.parents('.products-cards-slider__wrapper').find('.js-products-cards-slider-pagination'),
				prevArrow: self.parents('.products-cards-slider__wrapper').find('.js-products-cards-slider-btn-prev'),
				nextArrow: self.parents('.products-cards-slider__wrapper').find('.js-products-cards-slider-btn-next')
			});

		});
	}


	if ($('.js-our-brands-slider').length > 0) {
		$('.js-our-brands-slider').slick({
			infinite: true,
			dots: true,
			arrows: false,
			slidesToShow: 5,
			prevArrow: $('.js-our-brands-slider-btn-prev'),
			nextArrow: $('.js-our-brands-slider-btn-next'),
			appendDots: $('.js-our-brands-slider-pagination'),
			autoplay: true,
			autoplaySpeed: 5000
		});
	}


	// Timer
	var deadline = new Date('Feb 18, 2022 12:00:00').getTime();

	var timer = setInterval(function() {
		var now = new Date().getTime();
		var t = deadline - now;

		if (t >= 0) {
			var days = Math.floor(t / (1000 * 60 * 60 * 24));
			var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
			var secs = Math.floor((t % (1000 * 60)) / 1000);

			$('.js-timer-days').html(days);
			$('.js-timer-hours').html(("0"+hours).slice(-2));
			$('.js-timer-minutes').html(("0"+mins).slice(-2));
			$('.js-timer-seconds').html(("0"+secs).slice(-2));

		} 


	}, 1000);


});
