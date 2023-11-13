import { refs } from '../../refs';
import { getBooks } from '../books-api';
import { createMarkup } from './markup';
import anime from 'animejs';

const { body, modalBackdrop, modalBook, modalBookInfo } = refs;

export function toggleModal(state) {
	modalBackdrop.classList.toggle('is-hidden');
	modalBook.classList.toggle('is-hidden');
	body.classList.toggle('overflow-hide');

	anime({
		targets: modalBook,
		opacity: state === 'open' ? [0, 1] : [1, 0],
		scale: state === 'open' ? [0.8, 1] : [1, 0.8],
		duration: 300,
		easing: 'easeInOutQuad',
	});
}

export async function createModal(id) {
	const bookDate = await getBooks(id);

	const currentModal = createMarkup(bookDate);
	modalBookInfo.innerHTML = currentModal;
}
