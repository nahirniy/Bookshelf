import { changeActiveCategory } from '../helpers';
import { categoryContent } from './home-content';

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
