import { disabledPaginationBtn } from '../../helpers';
import { refs } from '../../refs';

const { paginationBtnWrap } = refs;

export function createButton(basket, page = 1) {
	const screenSize = window.innerWidth;
	const markup = [];
	const currentPage = page;
	let totalPages, maxCurrentPage, beforePage, afterPage;

	if (screenSize >= 768) {
		totalPages = Math.ceil(basket.length / 3);
		beforePage = page - 1;
		afterPage = page + 1;

		if (currentPage !== 1) {
			maxCurrentPage = totalPages - 1;
		} else {
			maxCurrentPage = totalPages - 2;
		}

		if (page === totalPages) {
			beforePage -= 1;
		}

		if (page === 1) {
			afterPage += 1;
		}
	} else if (screenSize < 768 && screenSize > 350) {
		totalPages = Math.ceil(basket.length / 4);
		beforePage = page - 1;
		afterPage = page;

		if (currentPage !== 1) {
			maxCurrentPage = totalPages;
		} else {
			maxCurrentPage = totalPages - 1;
		}

		if (page === 1) {
			afterPage += 1;
		}
	} else {
		totalPages = Math.ceil(basket.length / 4);
		beforePage = page;
		afterPage = page;

		if (currentPage !== 1) {
			maxCurrentPage = totalPages;
		} else {
			maxCurrentPage = totalPages - 1;
		}
	}

	for (let pageLength = beforePage; pageLength <= afterPage; pageLength += 1) {
		if (pageLength > totalPages) {
			break;
		}

		if (pageLength < 0) {
			continue;
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

		if (pageLength === afterPage && currentPage < maxCurrentPage) {
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

	disabledPaginationBtn(currentPage, totalPages);
	paginationBtnWrap.innerHTML = markup.join('');
}
