import { loadFromLS } from '../../helpers';
import { refs } from '../../refs';
import { createMarkup } from '../markup';
import { createButton } from './markup-button';

const { pagination, paginationBtnWrap } = refs;
let currentPage = 1;

const LOCALSTORAGE_KEY = 'dates of books';
const screenSize = window.innerWidth;

function handlePagination(e) {
	const currentBtn = e.target.closest('button');

	if (!currentBtn) {
		return;
	}

	const page = currentBtn.dataset.page;

	updatePage(page);
}

export function updatePagination(basket) {
	const activeBtn = paginationBtnWrap.querySelector('.pagination__active-btn');
	const currentPage = Number(activeBtn.dataset.page);
	let totalPages;

	if (screenSize >= 768) {
		totalPages = Math.ceil(basket.length / 3);
	} else {
		totalPages = Math.ceil(basket.length / 4);
	}

	if (currentPage > totalPages) {
		changePage(totalPages);
	} else {
		changePage(currentPage);
	}
}

function updatePage(page) {
	const amountBtn = paginationBtnWrap.childElementCount;
	const updateBasket = loadFromLS(LOCALSTORAGE_KEY) ?? [];
	const thisPage = Number(page);
	const firstPage = 1;
	let morePage;
	let lastPage;

	if (screenSize >= 768) {
		lastPage = Math.ceil(updateBasket.length / 3);
		morePage = currentPage + amountBtn;
	} else {
		lastPage = Math.ceil(updateBasket.length / 4);
		morePage = currentPage + amountBtn - 1;
	}

	let targetPage;

	switch (page) {
		case 'first-page':
			targetPage = firstPage;
			break;
		case 'prev-page':
			targetPage = currentPage - 1;
			break;
		case 'more-page':
			targetPage = morePage > lastPage ? lastPage : morePage;
			console.log(morePage);
			break;
		case 'next-page':
			targetPage = currentPage + 1;
			break;
		case 'last-page':
			targetPage = lastPage;
			break;
		default:
			targetPage = thisPage;
			break;
	}

	if (targetPage < 1 || targetPage > lastPage || targetPage === currentPage) {
		return;
	}

	changePage(targetPage);
}

export function changePage(page) {
	const updateBasket = loadFromLS(LOCALSTORAGE_KEY) ?? [];
	let startIndex;
	let currentBasket;

	if (screenSize >= 768) {
		startIndex = (page - 1) * 3;
		currentBasket = updateBasket.slice(startIndex, startIndex + 3);
	} else {
		startIndex = (page - 1) * 4;
		currentBasket = updateBasket.slice(startIndex, startIndex + 4);
	}

	createMarkup(currentBasket);
	createButton(updateBasket, page);

	currentPage = page;
}

pagination.addEventListener('click', handlePagination);
