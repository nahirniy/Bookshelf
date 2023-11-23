import { refs } from '../../refs';

const { paginationBtnWrap } = refs;

export function createButton(basket, page = 1) {
	const totalPages = Math.ceil(basket.length / 4);
	let beforePage = page - 1;
	let afterPage = page + 1;
	const markup = [];
	const currentPage = page;

	if (page === totalPages) {
		beforePage -= 1;
	}

	if (page === 1) {
		afterPage += 1;
	}

	for (let pageLength = beforePage; pageLength <= afterPage; pageLength += 1) {
		if (pageLength > totalPages) {
			break;
		}

		if (pageLength === 0) {
			pageLength += 1;
		}

		markup.push(
			`<button
                type="button"
                class="pagination__style-btn pagination__main-btn
                ${pageLength === currentPage ? 'pagination__active-btn' : ''}"
                data-page="${pageLength}">
                ${pageLength}
            </button>`
		);

		if (pageLength === afterPage && currentPage < totalPages - 1) {
			markup.push(
				`<button
                    type="button"
                    class="pagination__style-btn pagination__to-forward-btn pagination__main-btn"
                    data-page="more-page">
                    ...
                </button>`
			);
		}
	}

	paginationBtnWrap.innerHTML = markup.join('');
}
