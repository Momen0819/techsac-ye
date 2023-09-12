// Yazan javascript
var marginheight = $(".navbar.bg-light").height() + 17;
$("body header").css({
	marginBottom: marginheight,
});
$(document).ready(function () {
	var mySwiper = new Swiper(".swiper-container", {
		direction: "horizontal",
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	var mySwiper2 = new Swiper(".main-swiper-container", {
		direction: "horizontal",
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	var mySwiper3 = new Swiper(".carousel-swiper-container", {
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		autoplay: {
			delay: 1000,
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 2,
			},
			// when window width is >= 991px
			991: {
				slidesPerView: 3,
			},
			// when window width is >= 1280px
			1280: {
				slidesPerView: 5,
			},
		},
	});
	$("html").click(function (e) {
		if (document.getElementById("searchBtn").value == "" && window.matchMedia('(max-width: 768)') && e.target.tagName != "BUTTON") {
			$(".search-form-container label input").css("visibility", "hidden");
			$(".search-form-container #dash-rounded").fadeIn(500, function () {
				$(this).css("opacity", "1");
			});
			$(".search-form-container label #search-span").css(
				"display",
				"block"
			);
			$(".faqs-btn").animate({
				left: "140px",
			});
			$(".search-form-container label input").animate({
				width: "85px",
			});
		}
	});
	$(".search-form-container").on("click", function (event) {
		event.stopPropagation();
		$(".faqs-btn").animate({
			left: "200px",
		});
		$(".search-form-container label input").animate({
			width: "150px",
		});

		$(".search-form-container label input").css("visibility", "visible");
		$(".search-form-container #dash-rounded").css("display", "none");
		$(".search-form-container #dash-rounded").css("opacity", "0");
		$(".search-form-container label #search-span").css("display", "none");
		$(".search-form-container label input").focus();
	});
});
// Aous Mohammad

window.addEventListener("load", () => {
	var carousels = document.querySelectorAll(".carouselcube");
	for (var i = 0; i < carousels.length; i++) {
		carousel(carousels[i]);
	}
});

function carousel(root) {
	var figure = root.querySelector("figure"),
		nav = root.querySelector("nav"),
		images = figure.children,
		n = images.length,
		gap = root.dataset.gap || 0,
		bfc = "bfc" in root.dataset,
		theta = (2 * Math.PI) / n,
		currImage = 0;
	setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
	window.addEventListener("resize", () => {
		setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
	});

	setupNavigation();

	function setupCarousel(n, s) {
		var apothem = s / (2 * Math.tan(Math.PI / n));
		figure.style.transformOrigin = `50% 50% ${-apothem}px`;

		for (var i = 0; i < n; i++) images[i].style.padding = `${gap}px`;
		for (i = 1; i < n; i++) {
			images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
			images[i].style.transform = `rotateY(${i * theta}rad)`;
		}
		if (bfc)
			for (i = 0; i < n; i++)
				images[i].style.backfaceVisibility = "hidden";

		rotateCarousel(currImage);
	}

	function setupNavigation() {
		nav.addEventListener("click", onClick, true);

		function onClick(e) {
			e.stopPropagation();
			var t = e.target;
			var p = t.getAttribute("points");
			var s = t.getAttribute("data-svg");
			if (
				t.classList.contains("next") ||
				s == "triangle-right" ||
				p == "8 5 13 10 8 15"
			) {
				currImage--;
			} else {
				currImage++;
			}
			rotateCarousel(currImage);
		}
	}

	function rotateCarousel(imageIndex) {
		figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
	}
}
$(function () {
	$("#about .slider .pics .carouselcube img").swipe({
		swipeStatus: function (
			event,
			phase,
			direction,
			distance,
			duration,
			fingers,
			fingerData,
			currentDirection
		) {
			if (phase == "move") {
				if (distance % 20 == 0) {
					if (currentDirection == "right") {
						$(
							"body #about .slider .pics .carouselcube nav .next"
						).trigger("click");
					} else {
						$(
							"body #about .slider .pics .carouselcube nav .prev"
						).trigger("click");
					}
				}
			} else if (phase == "cancel" || phase == "end") {
				if (currentDirection == "left" || direction == "left") {
					$(
						"body #about .slider .pics .carouselcube nav .prev"
					).trigger("click");
				} else {
					$(
						"body #about .slider .pics .carouselcube nav .next"
					).trigger("click");
				}
			}
		},
		triggerOnTouchEnd: false,
		allowPageScroll: "horizontal",
		threshold: 5000,
	});
});

red = function (link) {
	window.location.href = link;
};

$(document).ready(function () {
	$("html").click(function () {
		if (window.matchMedia("(max-width: 768px)").matches) {
			$(".menu").fadeOut();
		}
	});
	setTimeout(function () {
		$("body").addClass("loaded");
		if (window.matchMedia("(max-width: 768px)").matches) {
			$(window).scroll(function () {
				if (this.scrollY >= 100) {
					$("body header .bg-light").css("height", "15vh");
					$("body header .bg-light").css("padding", "0");
				} else {
					$("body header .bg-light").css("height", "20vh");
				}
			});
		}
	}, 3500);
});
