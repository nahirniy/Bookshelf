import { getCategoryList } from '../services/books-api';
import { refs } from '../refs';

const { categoryList } = refs;

function createMarkup(type) {
	return `<li class="category__item">
    <button class="category__btn" type="button" data-list-name="${type}">${type}</button>
  </li>`;
}

async function createItem() {
	const listNames = await getCategoryList();
	const typesBooks = listNames.map(({ list_name }) => list_name);

	const categoryItem = typesBooks
		.sort((firstType, secondType) => firstType.localeCompare(secondType))
		.map(type => createMarkup(type))
		.join('');

	categoryList.insertAdjacentHTML('beforeend', categoryItem);
	categoryList.scrollTop = 0;
}

createItem();
