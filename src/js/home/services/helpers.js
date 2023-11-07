import { refs } from '../../refs';
import { bestsellersContent, categoryContent } from '../home-content';

const { booksContent, categoryList } = refs;
let prevCategory = '';

export function handleContent(e) {
	const currentBtn = e.target;
	const currentCategory = currentBtn.dataset.listName;

	if (currentBtn.tagName !== 'BUTTON' || prevCategory === currentCategory) {
		return;
	}

	currentCategory !== 'bestsellers' ? categoryContent(currentCategory) : bestsellersContent();
	prevCategory = currentCategory;
	changeActiveCategory(currentCategory);
	scrollToStart();
}

function changeActiveCategory(currentItem) {
	const buttons = [...categoryList.querySelectorAll('.category__btn')];
	const activeBtn = buttons.find(button => button.dataset.listName === currentItem);

	const prevActiveBtn = categoryList.querySelector('.active');

	activeBtn.classList.add('active');
	prevActiveBtn.classList.remove('active');
}

function scrollToStart() {
	const title = booksContent.querySelector('.books__title');
	title.scrollIntoView({ behavior: 'smooth' });
}

bestsellersContent();
