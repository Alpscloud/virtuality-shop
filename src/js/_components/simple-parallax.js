if(html > 767) {
	$(window).on('scroll', function(e){
		parallax('.js-item-parallax');
	});
}

function parallax(){
	var scrolled = $(window).scrollTop();

	$(elem).css({
		'transform': 'translate3d(0, ' + -(scrolled*0.1)+'px' + ', 0)',
		'-moz-transform': 'translate3d(0, ' + -(scrolled*0.1)+'px' + ', 0)',
		'-ms-transform': 'translate3d(0, ' + -(scrolled*0.1)+'px' + ', 0)',
		'-o-transform': 'translate3d(0, ' + -(scrolled*0.1)+'px' + ', 0)',
		'-webkit-transform': 'translate3d(0, ' + -(scrolled*0.1)+'px' + ', 0)'
	});
}