import { loadFromLS, saveToLS } from '../helpers';
import { refs } from '../refs';
import { changePage, updatePagination } from './pagination/pagination';
import { shoppingListContent } from './shopping-content';

const LOCALSTORAGE_KEY = 'dates of books';

export function removeBook(e) {
	const currentBtn = e.target.closest('.shopping-content__delete-btn');
	const basket = loadFromLS(LOCALSTORAGE_KEY) ?? [];

	if (!currentBtn) {
		return;
	}

	const bookId = currentBtn.closest('.shopping-content__item').dataset.id;

	findBook(bookId, basket);
	saveToLS(LOCALSTORAGE_KEY, basket);
	shoppingListContent(basket);
	updatePagination(basket);
}

function findBook(id, basket) {
	const index = basket.findIndex(book => book._id === id);
	basket.splice(index, 1);
}
