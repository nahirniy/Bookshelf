import { fonds } from '../data/fonds';
import { refs } from '../refs';

const { supportList, supportBtn } = refs;

function createMarkup(link, { dekstop, mobile }, description, index) {
	return `<li class="support__item">
    <span class="support__index"> ${index < 10 ? '0' + index : index}</span>
    <a href="${link}" class="support__link" target="_blank">
      <img
        class="support__image"
        srcset="${dekstop} 1x, ${mobile} 2x"
        src="${dekstop}"
        alt="${description}"
      />                
    </a>
  </li>`;
}

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
