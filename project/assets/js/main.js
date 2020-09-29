$(document).ready(function () {
	// this carousel for testimonials section
	// ========================================
	var testimonials = $(".slider-1");
	testimonials.owlCarousel({
		loop: true,
		nav: false,
		// navText: [
		// 	"<span class='previous-btn'> <i class='fa fa-long-arrow-left' aria-hidden='true'></i> previous</span>",
		// 	"<span  class='next-btn'>next <i class='fa fa-long-arrow-right' aria-hidden='true'></i></span>",
		// ],
		margin: 0,
		autoHeight: true,
		dots: true,
		navRewind: false,
		responsiveClass: true,
		responsive: {
			0: {
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
	var testimonials = $(".testimonials");
	testimonials.owlCarousel({
		loop: true,
		nav: false,
		// navText: [
		// 	"<span class='catagori-previous-btn'><i class='fa fa-long-arrow-left' aria-hidden='true'></i></span>",
		// 	"<span  class='catagori-next-btn'><i class='fa fa-long-arrow-right' aria-hidden='true'></i></span>",
		// ],
		margin: 0,
		// autoHeight: true,
		dots: true,
		navRewind: true,
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
	var testimonials = $(".slider-2");
	testimonials.owlCarousel({
		loop: true,
		nav: true,
		navText: [
			"<span class='catagori-previous-btn'><i class='fa fa-angle-left' aria-hidden='true'></i></span>",
			"<span  class='catagori-next-btn'><i class='fa fa-angle-right' aria-hidden='true'></i></span>",
		],
		margin: 30,
		// autoHeight: true,
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
				items: 3,
			},
		},
	});
});
