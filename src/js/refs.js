export const refs = {
	body: document.querySelector('body'),
	// Header
	header: document.querySelector('.header'),
	scrollBtn: document.querySelector('.header__scroll-btn'),
	mobileMenu: document.querySelector('.mobile-menu'),
	mobileMenuBtn: document.querySelector('.header__mobile-menu-btn'),
	mobileMenuList: document.querySelector('.mobile-menu__list'),
	mobileMenuIcon: document.querySelector('.header__mobile-menu-btn__icon'),

	// Sidebar
	categoryList: document.querySelector('.category__list'),
	supportList: document.querySelector('.support__list'),
	supportBtn: document.querySelector('.support__btn'),

	// Home
	// bestsellersList: document.querySelector('.books__list'),
	booksContent: document.querySelector('.books'),

	// Modal book
	modalBackdrop: document.querySelector('.modal-backdrop'),
	modalBook: document.querySelector('.modal-book'),
	modalBookInfo: document.querySelector('.modal-book__info'),
	modalCloseBtn: document.querySelector('.modal-book__close-btn'),
	modalToggleBtn: document.querySelector('.modal-book__toggle-btn'),
};
