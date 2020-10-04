$(document).ready(function () {
	// this carousel for testimonials section
	// ========================================
	var sliderOne = $(".deal__zone_slider");
	sliderOne.owlCarousel({
		loop: true,

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
				items: 2,
			},
			1000: {
				items: 4,
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
	var sliderTwo = $(".testimonial__slider");
	sliderTwo.owlCarousel({
		loop: true,
		nav: false,
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
			},
		},
	});

	// faq section plus minus icon
	function toggleIcon(e) {
		$(e.target)
			.prev(".panel-heading")
			.find(".more-less")
			.toggleClass("fa-plus fa-minus");
	}
	$(".panel-group").on("hidden.bs.collapse", toggleIcon);
	$(".panel-group").on("shown.bs.collapse", toggleIcon);

	/*-----------END-------------- */
});
