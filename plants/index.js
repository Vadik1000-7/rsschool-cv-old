let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');


menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');

})

	

const burgerMenu = () => {

	let menu = document.querySelector('.menu-btn');
	let menuNav = document.querySelector('.menu');
	let body = document.querySelector('body');

	body.addEventListener('click', (event) => {

		let target = event.target;

		if (target.closest('.menu-btn')) {
			menu.classList.add('burger-open');
			menuNav.style.display = 'block';
		} else if (target.classList.contains('.menu-btn')) {
			menu.classList.remove('burger-open');
			menuNav.style.display = 'close';
		} else if (target.tagName !== 'DIV') {
			menu.classList.remove('burger-open');
			menuNav.style.display = 'none';
		} else {
			return;
		}
		
	});

};

burgerMenu();


