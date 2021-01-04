		$(function () {
			$('.material-card > .mc-btn-action').click(function () {
				var card = $(this).parent('.material-card');
				var icon = $(this).children('i');
				icon.addClass('fa-spin-fast');

				if (card.hasClass('mc-active')) {
					card.removeClass('mc-active');

					window.setTimeout(function () {
						icon.
						removeClass('fa-arrow-left').
						removeClass('fa-spin-fast').
						addClass('fa-bars');

					}, 800);
				} else {
					card.addClass('mc-active');

					window.setTimeout(function () {
						icon.
						removeClass('fa-bars').
						removeClass('fa-spin-fast').
						addClass('fa-arrow-left');

					}, 800);
				}
			});
			src = ""
		});
		//# sourceURL=pen.js
		var swiper = new Swiper('.swiper-container', {
			effect: 'coverflow',
			grabCursor: false,
			centeredSlides: true,
			slidesPerView: 'auto',
			coverflowEffect: {
				rotate: 40,
				stretch: 0,
				depth: 200,
				modifier: 1,
				slideShadows: false,
			},
			autoplay: {
				delay: 2000,
				disableOnInteraction: true,
			},
			loop: true,
			pagination: {
				el: '.swiper-pagination',
			},
		});

