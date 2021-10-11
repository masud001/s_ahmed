$(document).ready(function () {
	$('.js_click').click(function () {
		$('.js_input').toggleClass('masud');
		$('.js_click').toggleClass('js_color');
		console.log('clicked');
	});
	$('.js_toggle').click(function () {
		$('.js_dropdown').toggleClass('d-none');
	});
	$('.js__foo_nav').click(function () {
		$('.navbar__search_input').toggleClass('d-none');
	});
	$('.js__toggle_foo').click(function () {
		$('.foo_navigation').toggleClass('d-none');
	});
});

$(document).on('click', '.index_gray .tabs a', function () {
	var _this = $(this),
		_this_index = _this.index();
	$('.index_gray .tabs a').removeClass('active').eq(_this_index).addClass('active');
	$('.three_place > div').removeClass('show_me').eq(_this_index).addClass('show_me');
	$('.index_gray em.bg span').removeClass('show_me').eq(_this_index).addClass('show_me');

	return false;
});

$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 25,
		nav: false,
		autoplay: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1000: {
				items: 2,
			},
		},
	});
});

// selece result css
const select = document.querySelectorAll('.selectBtn');
const option = document.querySelectorAll('.option');
let index = 1;

select.forEach((a) => {
	a.addEventListener('click', (b) => {
		const next = b.target.nextElementSibling;
		next.classList.toggle('toggle');
		next.style.zIndex = index++;
	});
});
option.forEach((a) => {
	a.addEventListener('click', (b) => {
		b.target.parentElement.classList.remove('toggle');

		const parent = b.target.closest('.select').children[0];
		parent.setAttribute('data-type', b.target.getAttribute('data-type'));
		parent.innerText = b.target.innerText;
	});
});
