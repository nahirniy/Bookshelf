export function createMarkup(type) {
	return `<li class="category__item">
    <button class="category__btn" type="button" data-list-name="${type}">${type}</button>
  </li>`;
}
