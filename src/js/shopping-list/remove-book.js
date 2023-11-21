import { saveToLS } from '../helpers';
import { shoppingListContent } from './shopping-content';

const LOCALSTORAGE_KEY = 'dates of books';

export function removeBook(e, basket) {
	const currentBtn = e.target.closest('.shopping-content__delete-btn');

	if (!currentBtn) {
		return;
	}

	const bookId = currentBtn.closest('.shopping-content__item').dataset.id;

	findBook(bookId, basket);
	saveToLS(LOCALSTORAGE_KEY, basket);
	shoppingListContent();
}

function findBook(id, basket) {
	const index = basket.findIndex(book => book._id === id);
	basket.splice(index, 1);
}
