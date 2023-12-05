import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { refs } from './refs';

const { categoryList, modalSwitchBtn, modalPurchaseText } = refs;

// Header

export function activePage() {
	const path = window.location.pathname;
	let activeLink;

	if (path === '/Bookshelf/') {
		activeLink = path === '/Bookshelf/' ? '/Bookshelf/index.html' : path;
	} else if (path === '/') {
		activeLink = path === '/' ? '/index.html' : path;
	} else {
		activeLink = path;
	}

	const links = [...document.querySelectorAll('.menu-link')];

	const currentLinks = links.filter(link => link.href.includes(activeLink));

	currentLinks.map(currentLink => currentLink.classList.add('current-link'));
}

// Home

export function changeActiveCategory(currentItem) {
	const buttons = [...categoryList.querySelectorAll('.category__btn')];
	const activeBtn = buttons.find(button => button.dataset.listName === currentItem);

	const prevActiveBtn = categoryList.querySelector('.active');

	activeBtn.classList.add('active');
	prevActiveBtn.classList.remove('active');

	scrollToStart(activeBtn);
}

function scrollToStart(activeBtn) {
	activeBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

export function showLoader() {
	Loading.hourglass('Loading...', {
		messageColor: '#eac645',
		messageFontSize: '30px',
		svgSize: '100px',
		svgColor: '#4f2ee8',
	});
}

export function hideLoader() {
	Loading.remove(500);
}

// Local storage

export function saveToLS(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromLS(key) {
	const data = localStorage.getItem(key);

	try {
		return JSON.parse(data);
	} catch {
		Notify.failure('Oops! Something went wrong...');
	}
}

// Modal book

export function removeBtn() {
	modalSwitchBtn.textContent = 'remove from the shopping list';
	modalSwitchBtn.classList.add('delete-btn');
	modalPurchaseText.style.display = 'block';
}

export function addBtn() {
	modalSwitchBtn.textContent = 'add to shopping list';
	modalSwitchBtn.classList.remove('delete-btn');
	modalPurchaseText.style.display = 'none';
}

// Pagination

export function disabledPaginationBtn(page, totalPages) {
	const disabledClass = 'pagination__disabled-btn';
	const firstPageBtn = document.querySelector('[data-page="first-page"]');
	const prevPageBtn = document.querySelector('[data-page="prev-page"]');
	const nextPageBtn = document.querySelector('[data-page="next-page"]');
	const lastPageBtn = document.querySelector('[data-page="last-page"]');

	firstPageBtn.classList.toggle(disabledClass, page === 1);
	prevPageBtn.classList.toggle(disabledClass, page === 1);

	nextPageBtn.classList.toggle(disabledClass, page === totalPages);
	lastPageBtn.classList.toggle(disabledClass, page === totalPages);
}
