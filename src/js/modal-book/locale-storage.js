import { addBtn, removeBtn } from './style-switch-btn';

const LOCALSTORAGE_KEY = 'dates of books';
const basket = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? [];

export function toggleBasketBook(currentBook) {
	const index = basket.findIndex(book => book._id === currentBook._id);
	index !== -1 ? basket.splice(index, 1) : basket.push(currentBook);

	switchStateBtn(currentBook);
	updateLocalStorage(basket);
}

export function switchStateBtn(book) {
	const inStorage = basket.some(({ _id }) => _id === book._id);

	inStorage ? removeBtn() : addBtn();
}

function updateLocalStorage(updatedBasket) {
	try {
		localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(updatedBasket));
	} catch {
		Notify.failure('Oops! Something went wrong...');
	}
}
