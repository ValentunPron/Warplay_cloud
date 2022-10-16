window.addEventListener('DOMContentLoaded', () => {
	//burger 
	if(document.querySelector('.header__burger')) {
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
	
		window.addEventListener("resize", closeBurgerMenu, true);
		
		 function closeBurgerMenu() {
			document.querySelector('.header__nav').classList.remove('burger-active');
			document.querySelector('.slider__burger').classList.remove('burger-active');
			document.querySelector('body').classList.remove('lock');
		}	
	}
	// -----
	// Slider
	if(document.querySelector('.swiper')) {
		const swiper = new Swiper('.swiper', {
			allowTouchMove: false,
			effect: 'fade',
			autoplay: {
				delay: 15000,
			},
		});
	}
	// -----
	// Login Menu 
	if(document.querySelector('#register') && document.querySelector('#entery')) {
		const register = document.querySelector('#register'),
		entery = document.querySelector('#entery'),
		registerButton = document.querySelectorAll('.login__register'),
		enteryButton = document.querySelectorAll('.login__entery');

		function openModule(module) {
			register.classList.remove('active');
			entery.classList.remove('active');
			module.classList.add('active');
		}

		registerButton.forEach(index => {
			index.addEventListener('click', e => {
				openModule(register);
			});
		});

		enteryButton.forEach(index => {
			index.addEventListener('click', e => {
				openModule(entery)
			});
		});
	}
	//-----
	// Scroll
	if(document.querySelector('#main') && document.querySelector('.logo__link')) {
		document.querySelector('#main').addEventListener('click', e => {
			e.preventDefault();
			window.scrollTo(0, 0);
			if(document.querySelector('.header__nav.burger-active')) {
				document.querySelector('.header__nav').classList.remove('burger-active');
				document.body.classList.remove('lock');
			}
		});
		document.querySelector('#server').addEventListener('click', e => {
			e.preventDefault();
			document.querySelector('.how-works').scrollIntoView();;
			if(document.querySelector('.header__nav.burger-active')) {
				document.querySelector('.header__nav').classList.remove('burger-active');
				document.body.classList.remove('lock');
			}
		});
		document.querySelector('.logo__link').addEventListener('click', e => {
			e.preventDefault();
			window.scrollTo(0, 0);
			if(document.querySelector('.header__nav.burger-active')) {
				document.querySelector('.header__nav').classList.remove('burger-active');
				document.body.classList.remove('lock');
			}
		});
		document.querySelector('#price').addEventListener('click', e => {
			e.preventDefault();
			document.querySelector('.subs').scrollIntoView();;
			if(document.querySelector('.header__nav.burger-active')) {
				document.querySelector('.header__nav').classList.remove('burger-active');
				document.body.classList.remove('lock');
			}
		});
	}
});