$(document).ready(function () {
	// When your page loads
	$(function () {
		// When the toggle areas in your navbar are clicked, toggle them
		$("#search-button, #search-icon").click(function (e) {
			e.preventDefault();
			$("#search-button, #search-form").toggle();
		});
	});

	// this carousel for about us section
	// ==================================
	var owl = $("._slider_wrapper");
	owl.owlCarousel({
		loop: true,
		nav: false,
		margin: 17,
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
	var testimonials = $("._testimonial_slider");
	testimonials.owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		responsiveClass: true,

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
