'use strict';

setTimeout(function () {
	return console.log('working!!!');
}, 5000);
var menu = document.querySelector('.nav-header__menu');
var menuList = document.querySelector('.nav__links');

menu.addEventListener('click', function (e) {
	menu.classList.toggle('nav-header__menu-expanded');
	menuList.classList.toggle('nav__links_collapsed');
	menuList.classList.toggle('nav__links_expanded');
	e.stopPropagation();
});