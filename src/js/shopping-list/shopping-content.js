import { refs } from '../refs';
import { createMarkup } from './markup';
import { removeBook } from './remove-book';

const LOCALSTORAGE_KEY = 'dates of books';

const { emptyContent, shoppingContentList } = refs;

const basket = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? [];

export function shoppingListContent() {
	if (basket.length !== 0) {
		emptyContent.classList.add('visually-hidden');
	} else {
		emptyContent.classList.remove('visually-hidden');
	}

	createMarkup(basket);
}

shoppingListContent();
shoppingContentList.addEventListener('click', e => removeBook(e, basket));
