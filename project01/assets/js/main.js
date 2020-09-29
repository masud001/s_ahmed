$(document).ready(function () {
	// this carousel for about us section
	// ==================================
	var owl = $(".about-carousel");
	owl.owlCarousel({
		loop: true,
		nav: true,
		margin: 30,
		dots: false,
		navRewind: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 3,
			},
		},
	});

	// this carousel for testimonials section
	// ========================================
	var testimonials = $(".testimonials-carousel");
	testimonials.owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		responsiveClass: true,
		navText: [
			"<i class='custom-arrow-left'><i/>",
			"<i class='custom-arrow-right'><i/>",
		],
		margin: 0,
		navRewind: false,
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

	// this code for smooth scrolling
	// ================================
	// select all links with hashes
	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
			if (
				location.pathname.replace(/^\//, "") ==
					this.pathname.replace(/^\//, "") &&
				location.hostname == this.hostname
			) {
				var target = $(this.hash);
				target = target.length
					? target
					: $("[name" + this.hash.slice(1) + "]");
				// dose a scroll target axist ?
				if (target.length) {
					// only prevent default of animations is actually gonna happen
					event.preventDefault();
					$("html,body").animate(
						{
							scrollTop: target.offset().top,
						},
						1000,
						function () {
							// callback after animation
							// mst change focus
							var $target = $(target);
							$target.focus();
							if ($target.is(":focus")) {
								return false;
							} else {
								$target.attr("tabindex", "-1");
								$target.focus();
							}
						}
					);
				}
			}
		});
});
