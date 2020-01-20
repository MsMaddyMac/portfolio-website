const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// When hamburger menu is clicked it will add the 'nav-open' class to it.
navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
});

// if a link in the hamburger menu is clicked it will remove the class 'nav-open' and bring you to the selected section of page.
navLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	});
});
