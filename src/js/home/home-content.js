import { getBooks } from '../services/books-api';
import { bestsellersMarkup, categoryMarkup } from './markup';
import { refs } from '../refs';
import { handleContent } from './helpers';

const { booksContent, categoryList } = refs;

export async function bestsellersContent() {
	const bestBooks = await getBooks('top-books');

	const content = bestsellersMarkup(bestBooks, 'Best Sellers Books');
	booksContent.innerHTML = content;
}

export async function categoryContent(currentCategory) {
	const currentBooks = await getBooks(`category?category=${currentCategory}`);

	const content = categoryMarkup(currentBooks, currentCategory);
	booksContent.innerHTML = content;
}

booksContent.addEventListener('click', handleContent);
categoryList.addEventListener('click', handleContent);
