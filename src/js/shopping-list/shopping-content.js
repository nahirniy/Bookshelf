import { loadFromLS } from '../helpers';
import { refs } from '../refs';
import { createMarkup } from './markup';
import { createButton } from './pagination/markup-button';
import { removeBook } from './remove-book';

const LOCALSTORAGE_KEY = 'dates of books';
const basket = loadFromLS(LOCALSTORAGE_KEY) ?? [];
const screenSize = window.innerWidth;
let currentBasket;

if (screenSize >= 768) {
	currentBasket = basket.slice(0, 3);
} else {
	currentBasket = basket.slice(0, 4);
}

const { emptyContent, shoppingContentList, pagination } = refs;

export function shoppingListContent(updateBasket) {
	if (updateBasket.length !== 0) {
		emptyContent.classList.add('visually-hidden');
		pagination.classList.remove('visually-hidden');
	} else {
		emptyContent.classList.remove('visually-hidden');
		pagination.classList.add('visually-hidden');
	}
}

shoppingListContent(basket);
createButton(basket);
createMarkup(currentBasket);

shoppingContentList.addEventListener('click', e => removeBook(e));
