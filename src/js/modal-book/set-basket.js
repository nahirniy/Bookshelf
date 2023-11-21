import { loadFromLS, removeBtn, saveToLS, addBtn } from '../helpers';

const LOCALSTORAGE_KEY = 'dates of books';
const basket = loadFromLS(LOCALSTORAGE_KEY) ?? [];

export function toggleBasketBook(currentBook) {
	const index = basket.findIndex(book => book._id === currentBook._id);
	index !== -1 ? basket.splice(index, 1) : basket.push(currentBook);

	switchStateBtn(currentBook);
	saveToLS(LOCALSTORAGE_KEY, basket);
}

export function switchStateBtn(book) {
	const inStorage = basket.some(({ _id }) => _id === book._id);

	inStorage ? removeBtn() : addBtn();
}
