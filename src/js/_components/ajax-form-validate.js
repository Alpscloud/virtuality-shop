// ========= Ajax form ===========
$('.js-input').on('focus',function() {
	if($(this).hasClass('is-error')) {
		$(this).removeClass('is-error');
	}
});

$('.js-form').submit(function(e) {
	e.preventDefault();

	var that = $(this);
		inputs = that.find('.js-input'),
		flag = true;

	// Validate
	$(inputs).each(function() {
		if(!$(this).val() || $(this).val() == "") {
			$(this).addClass('is-error');
			flag = false;
		}
	});

	if(!flag) {return false;}

	$.ajax({
		type: "POST",
		url: "mail.php", //Change
		data: that.serialize()
	}).done(function() {
		// add active clases
		setTimeout(function() {
			// remove active classes
			that.trigger("reset");
		}, 2000);
	});

});
// ========= =========== =========== ===========