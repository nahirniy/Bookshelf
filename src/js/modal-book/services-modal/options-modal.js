import { refs } from '../../refs';
import { getBookById } from '../../services/books-api';
import { switchStateBtn, toggleBasketBook } from './set-basket';
import { createMarkup } from './markup';
import anime from 'animejs';
import { Notify } from 'notiflix';

const { body, modalBackdrop, modalBook, modalBookInfo, modalSwitchBtn } = refs;

let bookDate;

const toggleHandler = () => toggleBasketBook(bookDate);

export function toggleModal(state) {
	const isOpen = state === 'open';

	modalBackdrop.classList.toggle('is-hidden');
	modalBook.classList.toggle('is-hidden');
	body.classList.toggle('overflow-hide');

	if (isOpen) {
		modalSwitchBtn.addEventListener('click', toggleHandler);
	} else {
		modalSwitchBtn.removeEventListener('click', toggleHandler);
	}

	anime({
		targets: modalBook,
		opacity: isOpen ? [0, 1] : [1, 0],
		scale: isOpen ? [0.8, 1] : [1, 0.8],
		duration: 300,
		easing: 'easeInOutQuad',
	});
}

export async function createModal(id) {
	try {
		bookDate = await getBookById(id);

		const currentModal = createMarkup(bookDate);
		modalBookInfo.innerHTML = currentModal;

		switchStateBtn(bookDate);
	} catch (err) {
		Notify.failure('Oops! Something went wrong...');
		console.error(err);

		toggleModal('close');
	}
}
