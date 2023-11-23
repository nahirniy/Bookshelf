import { loadFromLS } from '../helpers';
import { refs } from '../refs';
import { createMarkup } from './markup';
import { removeBook } from './remove-book';

const LOCALSTORAGE_KEY = 'dates of books';
const basket = loadFromLS(LOCALSTORAGE_KEY) ?? [];

const { emptyContent, shoppingContentList } = refs;

export function shoppingListContent() {
	if (basket.length !== 0) {
		emptyContent.classList.add('visually-hidden');
	} else {
		emptyContent.classList.remove('visually-hidden');
	}

	const currentBasket = basket.slice(0, 4);
	createMarkup(currentBasket);
}

shoppingListContent();
shoppingContentList.addEventListener('click', e => removeBook(e, basket));
