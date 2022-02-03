$('.js-tab-content').not(":first").hide();
$('.js-tab-btn:first').addClass('is-active');

$('.js-tab-btn').on('click', function(e) {
	e.preventDefault();
	$('.js-tab-content').removeClass('is-active');
	$('.js-tab-btn').removeClass('is-active').eq($(this).index()).addClass('is-active');
	$('.js-tab-content').hide().eq($(this).index()).fadeIn().addClass('is-active');
}).eq(0).addClass('is-active');