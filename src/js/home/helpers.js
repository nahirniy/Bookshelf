import { refs } from '../refs';
import { bestsellersContent, categoryContent } from './home-content';

const { categoryList } = refs;
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
}

function changeActiveCategory(currentItem) {
	const buttons = [...categoryList.querySelectorAll('.category__btn')];
	const activeBtn = buttons.find(button => button.dataset.listName === currentItem);

	const prevActiveBtn = categoryList.querySelector('.active');

	activeBtn.classList.add('active');
	prevActiveBtn.classList.remove('active');

	scrollToStart(activeBtn);
}

function scrollToStart(activeBtn) {
	activeBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

bestsellersContent();
