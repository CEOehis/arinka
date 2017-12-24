setTimeout(() => console.log('working!!!'), 5000);
const menu = document.querySelector('.nav-header__menu');
const menuList = document.querySelector('.nav__links');


menu.addEventListener('click',(e) => {
	menu.classList.toggle('nav-header__menu-expanded')
	menuList.classList.toggle('nav__links_collapsed');
	menuList.classList.toggle('nav__links_expanded');
	e.stopPropagation();
})