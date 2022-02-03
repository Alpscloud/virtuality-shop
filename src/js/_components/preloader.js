// Preloader
setTimeout(function(){
	$('body').addClass('is-loaded');
}, 2000);

$(window).on('load', function() {
	$('body').addClass('is-loaded');
});