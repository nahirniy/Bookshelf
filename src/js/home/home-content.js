import { getBooks } from '../helpers/books-api';
import { bestsellersMarkup, categoryMarkup } from './markup/create-markup';
import { refs } from '../refs';

const { booksContent, categoryList } = refs;
let prevCategory = '';

async function bestsellersContent() {
	const bestBooks = await getBooks('top-books');

	const content = bestsellersMarkup(bestBooks, 'Best Sellers Books');
	booksContent.innerHTML = content;
}

async function categoryContent(currentCategory) {
	const currentBooks = await getBooks(`category?category=${currentCategory}`);

	const content = categoryMarkup(currentBooks, currentCategory);
	booksContent.innerHTML = content;
}

function handleClick(e) {
	const currentBtn = e.target;
	const currentCategory = currentBtn.dataset.listName;

	if (currentBtn.tagName !== 'BUTTON' || prevCategory === currentCategory) {
		return;
	}

	currentCategory !== 'bestsellers' ? categoryContent(currentCategory) : bestsellersContent();

	prevCategory = currentCategory;
}

bestsellersContent();
booksContent.addEventListener('click', handleClick);
categoryList.addEventListener('click', handleClick);
