$(document).ready(function () {
	// this carousel for testimonials section
	// ========================================
	var sliderOne = $(".testimonial_carousel_wrapper");
	sliderOne.owlCarousel({
		loop: true,
		margin: 0,
		autoplay: true,
		autoHeight: true,
		dots: false,
		navRewind: false,
		nav: false,
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
			},
		},
	});
	// this carousel for testimonials section
	// ========================================
	var sliderTwo = $(".carousel__wrapper");
	sliderTwo.owlCarousel({
		center: true,
		loop: true,
		// autoplay: true,
		items: 2,
		autoHeight: true,
		lazyLoad: true,
		dots: false,
		nav: false,
		margin: 28,
		responsive: {
			0: {
				items: 1,
			},
			300: {
				items: 1,
			},
			600: {
				items: 2,
			},
			900: {
				items: 3,
			},
			1000: {
				items: 5,
			},
			1300: {
				items: 6,
			},
		},
	});

	/*-----------END-------------- */
});
