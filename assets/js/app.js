var windowHeight = $(window).height(),
	topSection = $('.section');
topSection.css('height', windowHeight);

$(window).resize(function() {
	var windowHeight = $(window).height();
	topSection.css('height', windowHeight);
});