import { refs } from '../refs';

const { modalSwitchBtn, modalPurchaseText } = refs;

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
