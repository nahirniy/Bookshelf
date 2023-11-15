import { refs } from '../refs';
import { shoppingListContent } from './shopping-content';

const { shoppingContentList } = refs;

const LOCALSTORAGE_KEY = 'dates of books';

export function removeBook(e, basket) {
	const currentBtn = e.target.closest('.shopping-content__delete-btn');

	if (!currentBtn) {
		return;
	}

	const bookId = currentBtn.closest('.shopping-content__item').dataset.id;

	const index = basket.findIndex(book => book._id === bookId);
	basket.splice(index, 1);

	try {
		localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(basket));
	} catch {
		Notify.failure('Oops! Something went wrong...');
	}

	shoppingListContent();
}
