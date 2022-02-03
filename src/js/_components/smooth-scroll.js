// ========= Smooth scrolling to the acnhors ===========
$('.js-smooth-scroll-link').on('click', function (e) {
	e.preventDefault();
	var id = $(this).attr('href'),
		top = $(id).offset().top;

	$('html, body').animate({scrollTop: top}, 'slow');
});	
// ========= =========== =========== ===========