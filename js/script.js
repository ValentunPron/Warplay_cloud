window.addEventListener('DOMContentLoaded', () => {
	//burger 
	document.querySelector('.slider__burger').addEventListener('click', e => {
		document.querySelector('.header__nav').classList.add('burger-active');
		document.querySelector('.slider__burger').classList.add('burger-active');
		document.querySelector('body').classList.add('lock');
	});
	document.querySelector('.header__return').addEventListener('click', e => {
		document.querySelector('.header__nav').classList.remove('burger-active');
		document.querySelector('.slider__burger').classList.remove('burger-active');
		document.querySelector('body').classList.remove('lock');
	})

	const swiper = new Swiper('.swiper', {
		allowTouchMove: false,
		effect: 'fade',
		autoplay: {
			delay: 15000,
		},
	});
});