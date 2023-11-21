import { getCurrentBooks, getTopBooks } from '../services/books-api';
import { bestsellersMarkup, categoryMarkup } from './markup';
import { refs } from '../refs';
import { handleContent } from './event-listener';

const { booksContent, categoryList } = refs;

export async function bestsellersContent() {
	const bestBooks = await getTopBooks();

	const content = bestsellersMarkup(bestBooks, 'Best Sellers Books');
	booksContent.innerHTML = content;
}

export async function categoryContent(category) {
	const currentBooks = await getCurrentBooks(category);

	const content = categoryMarkup(currentBooks, category);
	booksContent.innerHTML = content;
}

bestsellersContent();

booksContent.addEventListener('click', handleContent);
categoryList.addEventListener('click', handleContent);
