;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {

		// Testimonial Slider
		$('.slider-testimoinals .slides').bxSlider({
			controls: false,
			auto: true,
			pause: 5000
		});
	});
})(jQuery, window, document);
