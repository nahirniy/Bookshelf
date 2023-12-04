import { Notify } from 'notiflix';
import { getCurrentBooks, getTopBooks } from '../services/books-api';
import { bestsellersMarkup, categoryMarkup } from './markup';
import { refs } from '../refs';
import { handleContent } from './event-listener';
import { hideLoader, showLoader } from '../helpers';

const { booksContent, categoryList } = refs;

export async function bestsellersContent() {
	showLoader();
	try {
		const bestBooks = await getTopBooks();

		if (bestBooks.length === 0) {
			throw new Error();
		}

		const content = bestsellersMarkup(bestBooks, 'Best Sellers Books');
		booksContent.innerHTML = content;
	} catch (err) {
		Notify.failure('Oops! Something went wrong...');
		console.error(err);

		booksContent.innerHTML = '<h2>Try reloading the page...</h2>';
	} finally {
		hideLoader();
	}
}

export async function categoryContent(category) {
	showLoader();
	try {
		const currentBooks = await getCurrentBooks(category);

		if (currentBooks.length === 0) {
			throw new Error();
		}

		const content = categoryMarkup(currentBooks, category);
		booksContent.innerHTML = content;
	} catch (err) {
		Notify.failure('Oops! Something went wrong...');
		console.error(err);

		booksContent.innerHTML = '<h2>Try reloading the page...</h2>';
	} finally {
		hideLoader();
	}
}

bestsellersContent();

booksContent.addEventListener('click', handleContent);
categoryList.addEventListener('click', handleContent);
