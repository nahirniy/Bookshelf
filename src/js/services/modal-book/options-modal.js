import { refs } from '../../refs';
import { getBooks } from '../books-api';
import { switchStateBtn, toggleBasketBook } from './locale-storage';
import { createMarkup } from './markup';
import anime from 'animejs';

const { body, modalBackdrop, modalBook, modalBookInfo, modalSwitchBtn } = refs;

let bookDate;

const toggleHandler = () => toggleBasketBook(bookDate);

export function toggleModal(state) {
	const isOpen = state === 'open';

	modalBackdrop.classList.toggle('is-hidden');
	modalBook.classList.toggle('is-hidden');
	body.classList.toggle('overflow-hide');

	isOpen
		? modalSwitchBtn.addEventListener('click', toggleHandler)
		: modalSwitchBtn.removeEventListener('click', toggleHandler);

	anime({
		targets: modalBook,
		opacity: isOpen ? [0, 1] : [1, 0],
		scale: isOpen ? [0.8, 1] : [1, 0.8],
		duration: 300,
		easing: 'easeInOutQuad',
	});
}

export async function createModal(id) {
	bookDate = await getBooks(id);

	const currentModal = createMarkup(bookDate);
	modalBookInfo.innerHTML = currentModal;

	switchStateBtn(bookDate);
}
