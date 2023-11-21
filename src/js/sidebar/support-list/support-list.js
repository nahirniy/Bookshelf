import { fonds } from '../../data/fonds';
import { refs } from '../../refs';
import { createMarkup } from './markup';

const { supportList, supportBtn } = refs;

function createItem() {
	const supportItem = fonds
		.map(({ title, url, img }, index) => createMarkup(url, img, title, index + 1))
		.join('');

	supportList.insertAdjacentHTML('beforeend', supportItem);
	supportList.scrollTop = 0;
}

function handleSrcoll() {
	supportBtn.classList.toggle('expand-list');

	const scrollDown = supportList.scrollHeight - supportList.clientHeight;
	supportList.scrollTop = supportBtn.classList.contains('expand-list') ? scrollDown : 0;
}

supportBtn.addEventListener('click', handleSrcoll);
createItem();
