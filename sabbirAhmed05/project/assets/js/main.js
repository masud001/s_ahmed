$(document).ready(function () {
	// this carousel for about us section
	// ==================================
	var owl = $(".slider");
	owl.owlCarousel({
		loop: false,
		nav: true,
		margin: 20,
		autoplay: false,
		autoHeight: true,
		dots: true,
		navRewind: true,
		navText: [
			'<i class="fa fa-long-arrow-left"></i> <span>right</span>',
			'<span>left</span><i class="fa fa-long-arrow-right"></i>',
		],
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

	// our product section filter
	var mixer = mixitup(".products", {
		selectors: {
			control: "[data-mixitup-control]",
		},
	});
});
