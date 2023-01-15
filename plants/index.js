let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let body = document.querySelector('.body');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
body.addEventListener('click', e => {
	if(e.target.classList.contains('body')){
		menuBtn.classList.toggle('active');
		menu.classList.toggle('active');
		body.classList.toggle('close');
	}
})




