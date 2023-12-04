import { getCategoryList } from '../../services/books-api';
import { refs } from '../../refs';
import { createMarkup } from './markup';
import { Notify } from 'notiflix';

const { categoryList } = refs;

async function createItem() {
	try {
		const listNames = await getCategoryList();

		if (listNames.length === 0) {
			throw new Error();
		}

		const typesBooks = listNames.map(({ list_name }) => list_name);
		const categoryItem = typesBooks
			.sort((firstType, secondType) => firstType.localeCompare(secondType))
			.map(type => createMarkup(type))
			.join('');

		categoryList.insertAdjacentHTML('beforeend', categoryItem);
	} catch (err) {
		Notify.failure('Oops! Something went wrong...');
		console.error(err);
	}

	categoryList.scrollTop = 0;
}

createItem();
