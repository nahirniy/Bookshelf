export function bestsellersMarkup(bestBooks, name) {
	const title = styleTitle(name);

	const markup = `${title}
	<ul class="books__bestsellers">
        ${bestBooks.map(({ books, list_name }) => createCategories(books, list_name)).join('')}
	</ul>`;

	return markup;
}

export function categoryMarkup(books, name) {
	const title = styleTitle(name);

	const markup = `${title}
        <ul class="books__category">
            ${books.map(book => createCard(book)).join('')}
        </ul>`;

	return markup;
}

function createCategories(books, name) {
	return `<li class="books__bestsellers__item">
            <p class="books__bestsellers__list-name">${name}</p>
            <ul class="books__bestsellers__list">
                ${books.map(book => createCard(book)).join('')}
            </ul>
            <button
                class="books__bestsellers__btn"
                type="button"
                data-list-name="${name}">
                See more
            </button>
        </li>`;
}

function createCard(book) {
	const { _id, book_image, book_image_width, book_image_height, publisher, title } = book;

	return `<li class="books__item" data-id="${_id}">
        <img
            class="books__image"
            src="${book_image}" 
                width="${book_image_width}" 
                height="${book_image_height}"
                loading="lazy"
            />
        <h4 class="books__title-book">${title}</h4>
        <span class="books__author">${publisher}</span>
    </li>`;
}

function styleTitle(name) {
	const titleArray = name.split(' ');
	const lastWord = titleArray.splice(length - 1, 1).join('');
	const title = titleArray.join(' ');

	return `<h2 class="books__title">${title}
        <span class="books__title__accent">${lastWord}</span>
    </h2>`;
}
