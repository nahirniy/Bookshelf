export function createMarkup(link, { dekstop, mobile }, description, index) {
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
