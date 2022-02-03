// Popup
$('.js-open-popup-btn').on('click',function(e) {
	e.preventDefault();
	$('.js-popup').fadeIn(300);
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