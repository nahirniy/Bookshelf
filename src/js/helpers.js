import { refs } from './refs';

const { categoryList, modalSwitchBtn, modalPurchaseText } = refs;

// Home

export function changeActiveCategory(currentItem) {
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

// Local storage

export function saveToLS(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromLS(key) {
	const data = localStorage.getItem(key);

	try {
		return JSON.parse(data);
	} catch {
		Notify.failure('Oops! Something went wrong...');
	}
}

// Modal book

export function removeBtn() {
	modalSwitchBtn.textContent = 'remove from the shopping list';
	modalSwitchBtn.classList.add('delete-btn');
	modalPurchaseText.style.display = 'block';
}

export function addBtn() {
	modalSwitchBtn.textContent = 'add to shopping list';
	modalSwitchBtn.classList.remove('delete-btn');
	modalPurchaseText.style.display = 'none';
}
