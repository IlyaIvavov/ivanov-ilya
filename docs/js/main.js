const pageSlider = new Swiper('.page', {
	wrapperClass: '.page__wrapper',
	sliderClass: '.page__screen',
	direction: 'vertical',
	slidesPerView: 'auto',
	parallax: true,

	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},

	mousewheel: {
		sensitivity: 1,
	},

	watchOverflow: true,
	speed: 400,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,

	pagination: {
		el: '.page__pagination',
		type: 'bullets',
		clickable: true,
		bulletClass: '.page__bullet',
		bulletActiveClass: '.page__bullet_active',
	},

	scrollbar: {
		el: '.page__scroll',
		dragClass: '.page_drag-scroll',
		draggable: true,
	},
});