import { refs } from '../../refs';
import { toggleModal, createModal } from './options-modal';

const { booksContent, modalBackdrop, modalCloseBtn } = refs;

async function openModal(e) {
	const currentBook = e.target;

	if (!currentBook.closest('.books__item')) {
		return;
	}

	const bookId = currentBook.closest('.books__item').dataset.id;

	createModal(bookId);
	toggleModal('open');

	document.addEventListener('keydown', closeModal);
}

function closeModal(e) {
	if (e.target === modalBackdrop) {
		toggleModal('close');
	}

	if (e.key === 'Escape' && !modalBackdrop.classList.contains('is-hidden')) {
		toggleModal('close');
	}

	document.removeEventListener('keydown', closeModal);
}

modalCloseBtn.addEventListener('click', () => toggleModal('close'));
modalBackdrop.addEventListener('click', closeModal);
booksContent.addEventListener('click', openModal);
