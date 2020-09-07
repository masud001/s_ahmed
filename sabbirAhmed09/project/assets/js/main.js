$(document).ready(function () {
	// this carousel for testimonials section
	// ========================================
	var testimonials = $(".home-slider");
	testimonials.owlCarousel({
		loop: false,
		nav: true,
		navText: [
			"<span class='previous-btn'> <i class='fa fa-long-arrow-left' aria-hidden='true'></i> previous</span>",
			"<span  class='next-btn'>next <i class='fa fa-long-arrow-right' aria-hidden='true'></i></span>",
		],
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
	var testimonials = $(".catagori-slider");
	testimonials.owlCarousel({
		loop: true,
		nav: true,
		navText: [
			"<span class='catagori-previous-btn'><i class='fa fa-long-arrow-left' aria-hidden='true'></i></span>",
			"<span  class='catagori-next-btn'><i class='fa fa-long-arrow-right' aria-hidden='true'></i></span>",
		],
		margin: 50,
		// autoHeight: true,
		dots: false,
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
				items: 2,
			},
			1000: {
				items: 3,
			},
		},
	});
	// this carousel for testimonials section
	// ========================================
	var testimonials = $(".testimonial-slider");
	testimonials.owlCarousel({
		loop: true,
		nav: false,
		margin: 0,
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
				items: 1,
			},
		},
	});

	/* 


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
	
	*/
});
