$(document).ready(function () {
	// this carousel for testimonials section
	// ========================================
	var sliderOne = $(".service__slider");
	sliderOne.owlCarousel({
		loop: true,
		margin: 0,
		autoHeight: true,
		dots: false,
		navRewind: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			300: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
				nav: true,
				navText: [
					"<span class='catagori-previous-btn'><i class='fa fa-angle-left' aria-hidden='true'></i></span>",
					"<span  class='catagori-next-btn'><i class='fa fa-angle-right' aria-hidden='true'></i></span>",
				],
			},
		},
	});
	// this carousel for testimonials section
	// ========================================
	var sliderTwo = $(".testimonial__content_wrapper");
	sliderTwo.owlCarousel({
		loop: true,
		nav: false,
		autoplay: true,
		margin: 30,
		autoHeight: true,
		dots: false,
		navRewind: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			300: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 2,
			},
		},
	});

	/*-----------END-------------- */
});
