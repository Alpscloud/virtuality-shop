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


	// Popups
	$('.js-open-callback-popup-btn').on('click',function(e) {
		e.preventDefault();
		$('.js-popup-callback').fadeIn(300);
		$('html').addClass('is-fixed');
	});

	$('.js-open-login-popup-btn').on('click',function(e) {
		e.preventDefault();
		$('.js-popup-registration').fadeOut(300);
		$('.js-popup-login').fadeIn(300);
		$('html').addClass('is-fixed');
	});

	$('.js-open-password-popup-btn').on('click',function(e) {
		e.preventDefault();
		$('.js-popup-login').fadeOut(300);
		$('.js-popup-password').fadeIn(300);
		$('html').addClass('is-fixed');
	});

	$('.js-open-registration-popup-btn').on('click',function(e) {
		e.preventDefault();
		$('.js-popup-login').fadeOut(300);
		$('.js-popup-registration').fadeIn(300);
		$('html').addClass('is-fixed');
	});

	$('.js-open-feedback-form-popup-btn').on('click',function(e) {
		e.preventDefault();
		$('.js-popup-feedback-form').fadeIn(300);
		$('html').addClass('is-fixed');
	});




	




	$('.js-close-popup-btn').on('click',function(e) {
		e.preventDefault();
		$(this).parents('.js-popup').fadeOut(300);
		$('html').removeClass('is-fixed');
	});

	$('.popup__overflow').on('click', function(e) {
		e.stopPropagation();

		var content = $(this).find('.popup__body');

		if(!content.is(e.target) && content.has(e.target).length === 0) {
			$('html').removeClass('is-fixed');
			$('.js-popup').fadeOut(300);
		}

	});
	// ========= =========== =========== ===========


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


	$('.js-open-catalog-menu-btn').on('click', function(e) {
		e.preventDefault();

		$('.js-catalog-menu').toggleClass('is-opened');
	});

	$('.js-close-catalog-menu-btn').on('click', function(e) {
		e.preventDefault();

		$('.js-catalog-menu').removeClass('is-opened');
	});


	$('.catalog-menu__nav li').on('mouseenter', function(e) {
		var id = $(this).attr('data-id');

		$('.js-catalog-menu-categories').removeClass('is-active');
		$('.js-catalog-menu-categories[data-id="'+id+'"]').addClass('is-active');
	});


	$('.catalog-menu__categories--block .catalog-menu__title').on('click', function(e) {
		e.preventDefault();

		$(this).toggleClass('is-active');
		$(this).parents('.catalog-menu__categories--block').find('.catalog-menu__categories-lists_wrapper').stop().slideToggle(250);
	});

	$('.catalog-menu__categories-list_title').on('click', function(e) {
		e.preventDefault();

		$(this).toggleClass('is-active');
		$(this).parents('.catalog-menu__categories-list').find('ul').stop().slideToggle(250);
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
			autoplaySpeed: 8000,
			responsive: [
				{
					breakpoint: 1590,
					settings: {
						slidesToShow: 1,
						variableWidth: false,
						centerMode: false
					}
				}
			]
		});
	}

	if ($('.js-advantages-slider').length > 0) {
		$('.js-advantages-slider').slick({
			infinite: true,
			dots: true,
			arrows: false,
			slidesToShow: 5,
			appendDots: $('.js-advantages-slider-pagination'),
			responsive: [
				{
					breakpoint: 1365,
					settings: {
						slidesToShow: 4
					}
				},
				{
					breakpoint: 1100,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				}
			]

		});
	}

	if ($('.js-promo-products-cards-slider').length > 0) {
		$('.js-promo-products-cards-slider').slick({
			infinite: true,
			dots: true,
			arrows: false,
			arrows: false,
			appendDots: $('.js-promo-products-cards-slider-pagination'),
			responsive: [
				{
					breakpoint: 1280,
					settings: {
						slidesToShow: 4
					}
				},
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 620,
					settings: {
						slidesToShow: 1
					}
				}
			]
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
				nextArrow: self.parents('.products-cards-slider__wrapper').find('.js-products-cards-slider-btn-next'),
				responsive: [
					{
						breakpoint: 1550,
						settings: {
							slidesToShow: 4
						}
					},
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2	
						}
					}
				]
			});

		});
	}


	if ($('.js-tab-controls-slider').length > 0) {
		$('.js-tab-controls-slider').each(function() {
			var self = $(this);

			self.slick({
				infinite: true,
				slidesToShow: 5,
				//variableWidth: true,
				dots: false,
				prevArrow: self.parents('.tab-controls-slider__wrapper').find('.js-tab-controls-slider-btn-prev'),
				nextArrow: self.parents('.tab-controls-slider__wrapper').find('.js-tab-controls-slider-btn-next')
			});

		});

		if(html < 768) {
			$('.js-tab-controls-slider').each(function() {
				$(this).slick('unslick');
			});
		}

		
	}


	if ($('.js-our-brands-slider').length > 0) {
		$('.js-our-brands-slider').slick({
			infinite: true,
			dots: true,
			slidesToShow: 5,
			prevArrow: $('.js-our-brands-slider-btn-prev'),
			nextArrow: $('.js-our-brands-slider-btn-next'),
			appendDots: $('.js-our-brands-slider-pagination'),
			autoplay: true,
			autoplaySpeed: 5000,
			responsive: [
				{
					breakpoint: 1100,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					}
				},
				{
					breakpoint: 620,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				}
			]
		});
	}

	if ($('.js-faq-slider').length > 0) {
		$('.js-faq-slider').slick({
			infinite: true,
			dots: true,
			slidesToShow: 6,
			prevArrow: $('.js-faq-slider-btn-prev'),
			nextArrow: $('.js-faq-slider-btn-next'),
			appendDots: $('.js-faq-slider-pagination'),
			responsive: [
				{
					breakpoint: 1550,
					settings: {
						slidesToShow: 5,
					}
				},
				{
					breakpoint: 1280,
					settings: {
						slidesToShow: 4,

					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				}
			]
		});
	}

	if ($('.js-feedbacks-slider').length > 0) {
		$('.js-feedbacks-slider').slick({
			infinite: true,
			dots: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			prevArrow: $('.js-feedbacks-slider-btn-prev'),
			nextArrow: $('.js-feedbacks-slider-btn-next'),
			appendDots: $('.js-feedbacks-slider-pagination'),
			responsive: [
				{
					breakpoint: 1365,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});
	}

	if ($('.js-sertificates-slider').length > 0) {
		$('.js-sertificates-slider').slick({
			infinite: true,
			dots: true,
			slidesToShow: 6,
			prevArrow: $('.js-sertificates-slider-btn-prev'),
			nextArrow: $('.js-sertificates-slider-btn-next'),
			appendDots: $('.js-sertificates-slider-pagination'),
			responsive: [
				{
					breakpoint: 1365,
					settings: {
						slidesToShow: 5
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 4
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				}
			]
		});
	}





	if ($('.js-feedback-gallery-slider').length > 0) {
		$('.js-feedback-gallery-slider').each(function() {
			var self = $(this);

			self.on('init', function(slick) {
				$(this).parents('.slider-with-loading').addClass('is-loaded');
			});

			self.slick({
				infinite: true,
				dots: true,
				swipe: false,
				slidesToScroll: 3,
				slidesToShow: 3,
				appendDots: self.parents('.feedback-gallery').find('.js-feedback-gallery-slider-pagination'),
				prevArrow: self.parents('.feedback-gallery').find('.js-feedback-gallery-slider-btn-prev'),
				nextArrow: self.parents('.feedback-gallery').find('.js-feedback-gallery-slider-btn-next'),
				responsive: [
					{
						breakpoint: 621,
						settings: {
							slidesToShow: 1,
							variableWidth: true,
							slidesToScroll: 1
						}
					}
				]
			});

		

		});
	}

	

	$('.js-open-feedback-popup-btn').on('click',function(e) {
		e.preventDefault();

		var feedbackGallerySlider = $(this).parents('.js-popup-feedback').find('.js-feedback-gallery-slider');

		$('.js-popup-feedback').fadeIn(300);
		$('html').addClass('is-fixed');

		$(this).parents('.js-popup-feedback').find('.js-feedback-gallery-slider').slick('reinit');
		//$(this).parents('.js-popup-feedback').find('.js-feedback-gallery-slider').slick('setPosition');

	});



	$('[data-fancybox]').fancybox({
		loop: true,
		buttons: [
			"zoom",
			"close"
		]
	});

	// Form
	$('.js-required-input').on('focus', function() {
		if($(this).parents('.form-group').hasClass('is-error')) {
			$(this).parents('.form-group').removeClass('is-error');
		}
	});


	// Show password in input

	$('.js-show-input-password-btn').on('click', function() {
		var input = $(this).parents('.form-group').find('.js-pw-input');



		input.attr('type', input.attr('type') === 'password' ? 'text' : 'password');
	});




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


	if (html > 767) {

		$(".styled-scroll").overlayScrollbars({ 
			overflowBehavior: {x: 'hidden'}
		});

	}



	




});
