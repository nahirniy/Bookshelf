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
}

function closeModal(e) {
	if (e.target === modalBackdrop) {
		toggleModal('close');
	}

	if (e.key === 'Escape' && !modalBackdrop.classList.contains('is-hidden')) {
		toggleModal('close');
	}
}

// function toggleItem(e) {
// 	if (!e.target.classList.contains('modal-book__toggle-btn')) {
// 		return;
// 	}

// 	console.log(e.target.closest('.books__item'));
// }

// modalBook.addEventListener('click', toggleItem);

modalCloseBtn.addEventListener('click', () => toggleModal('close'));
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModal);

booksContent.addEventListener('click', openModal);
