import { loadFromLS } from '../../helpers';
import { refs } from '../../refs';
import { createMarkup } from '../markup';
import { shoppingListContent } from '../shopping-content';
import { createButton } from './markup-button';

const { pagination, paginationBtnWrap } = refs;
let currentPage = 1;

const LOCALSTORAGE_KEY = 'dates of books';
const basket = loadFromLS(LOCALSTORAGE_KEY) ?? [];

function handleNavigate(e) {
	const currentBtn = e.target.closest('button');

	if (!currentBtn) {
		return;
	}

	const page = currentBtn.dataset.page;

	switchPage(page);
}

function switchPage(page) {
	const amountBtn = paginationBtnWrap.childElementCount;

	const firstPage = 1;
	const prevPage = currentPage - 1;
	const morePage = amountBtn;
	const nextPage = currentPage + 1;
	const lastPage = Math.ceil(basket.length / 4);

	switch (page) {
		case 'first-page':
			changePage(firstPage);
			break;
		case 'prev-page':
			changePage(prevPage);
			break;
		case 'more-page':
			changePage(morePage);
			break;
		case 'next-page':
			changePage(nextPage);
			break;
		case 'last-page':
			changePage(lastPage);
			break;
		default:
			changePage(page);
			break;
	}
}

function changePage(page) {
	const thisPage = Number(page);
	const lastPage = Math.ceil(basket.length / 4);
	const startIndex = (thisPage - 1) * 4;
	const currentBasket = basket.slice(startIndex, startIndex + 4);

	if (thisPage < 1 || thisPage > lastPage || thisPage === currentPage) {
		return;
	}

	createMarkup(currentBasket);
	createButton(basket, thisPage);

	currentPage = page;
}

createButton(basket);
pagination.addEventListener('click', handleNavigate);
