import { getBooks } from '../helpers/books-api';
import { refs } from '../refs';

const { categoryList } = refs;

function createMarkup(type) {
	return `<li class="category__item">
    <button class="category__btn" type="button" data-list-name="${type}">${type}</button>
  </li>`;
}

async function createItem() {
	const listNames = await getBooks('category-list');
	const typesBooks = listNames.map(({ list_name }) => list_name);

	const categoryItem = typesBooks
		.sort((firstType, secondType) => firstType.localeCompare(secondType))
		.map(type => createMarkup(type))
		.join('');

	categoryList.insertAdjacentHTML('beforeend', categoryItem);
}

function handleActive(e) {
	const currentBtn = e.target;
	const activeBtn = categoryList.querySelector('.active');

	if (!currentBtn.classList.contains('category__btn')) {
		return;
	}

	activeBtn.classList.remove('active');
	currentBtn.classList.add('active');
}

categoryList.addEventListener('click', handleActive);
createItem();
