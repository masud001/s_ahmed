// sticky header
window.onscroll = function () {
	myFunction();
	// console.log('first');
};

var navbar = document.getElementById('sticky_menu');
var sticky = navbar.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add('sticky');
	} else {
		navbar.classList.remove('sticky');
	}
}

$(document).ready(function () {
	$('.js_click').click(function () {
		$('.js_input').toggleClass('masud');
		$('.js_click').toggleClass('js_color');
		console.log('clicked');
	});
	// mobile menu toggle

	$('.js_toggle').click(function () {
		$('.js_dropdown').toggleClass(' masud');
	});

	$('.fa-list-ul').click(function () {
		$(this).addClass('d-none');
		$('.fa-times').removeClass('d-none');
	});
	$('.fa-times').click(function () {
		$(this).addClass('d-none');
		$('.fa-list-ul').removeClass('d-none');
	});

	$('.js__foo_nav').click(function () {
		$('.navbar__search_input').toggleClass('d-none');
	});
	$('.js__toggle_foo').click(function () {
		$('.foo_navigation').toggleClass('d-none');
	});

	// mobile toggle menu
	$('.js_navbar__menu_dropdown').click(function (e) {
		// e.preventDefault();
		$('.navbar__menu_dropdown').toggleClass('d-none');
	});
	$('.js_navbar__menu_dropdown_academic').click(function (e) {
		// e.preventDefault();
		$('.navbar__menu_dropdown_academic').toggleClass('d-none');
	});
	$('.js_navbar__menu_dropdown_re_pub').click(function (e) {
		// e.preventDefault();
		$('.navbar__menu_dropdown_re_pub').toggleClass('d-none');
	});
	$('.js_navbar__menu_dropdown_activities').click(function (e) {
		// e.preventDefault();
		$('.navbar__menu_dropdown_activities').toggleClass('d-none');
	});
	$('.js_navbar__menu_dropdown_resources').click(function (e) {
		// e.preventDefault();
		$('.navbar__menu_dropdown_resources').toggleClass('d-none');
	});
	$('.js_navbar__menu_dropdown_alumni').click(function (e) {
		// e.preventDefault();
		$('.navbar__menu_dropdown_alumni').toggleClass('d-none');
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

// stuff page js

$('.tabbar ul li a').on('click touch', function (e) {
	e.preventDefault();

	var self = $(this);
	var li = self.parent();

	if (!li.hasClass('active')) {
		var active = self.parent().parent().children('.active');

		$('<em />').addClass('up').appendTo(active);
		$('<em />').addClass('up2').appendTo(active);
		$('<em />').addClass('up3').appendTo(active);
		$('<em />').addClass('down').appendTo(active);
		$('<em />').addClass('down2').appendTo(active);
		$('<em />').addClass('down3').appendTo(active);
		var em = active.children('em');

		var offset = 0;
		var multipleSteps = false;
		var left = active.position().left;
		var leftNew = self.parent().position().left;
		var toRight = active.index() < li.index();

		if (toRight) {
			multipleSteps = li.index() - active.index() > 1;
			self.addClass('toRight');
			active.children('a').addClass('removeRight');
			em.css('--offset', leftNew - left);
		} else {
			multipleSteps = active.index() - li.index() > 1;
			self.addClass('toLeft');
			active.children('a').addClass('removeLeft');
			em.css('--offset', (left - leftNew) * -1);
		}

		em.addClass('move').toggleClass('multipleSteps', multipleSteps);

		setTimeout(function () {
			active.removeClass('active');
			active.children('a').removeClass('removeRight removeLeft');
		}, 300);

		setTimeout(function () {
			self.removeClass('toRight toLeft');
			self.parent().addClass('active');
			em.remove();
		}, 600);
	}
});

// Fancybox Configuration
$('[data-fancybox="gallery"]').fancybox({
	buttons: ['slideShow', 'thumbs', 'zoom', 'fullScreen', 'share', 'close'],
	loop: false,
	protect: true,
});

// data table
