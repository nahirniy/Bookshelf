import amazon from '../../../images/trading-platform/amazon.webp';
import amazon2x from '../../../images/trading-platform/amazon@2x.webp';
import appleBooks from '../../../images/trading-platform/apple-books.webp';
import appleBooks2x from '../../../images/trading-platform/apple-books@2x.webp';

function createLink(links, item) {
	return links.find(({ name }) => name.toLowerCase() === item).url;
}

export function createMarkup(bookDate) {
	const { book_image, title, author, buy_links } = bookDate;
	const amazonLink = createLink(buy_links, 'amazon');
	const appleBooksLink = createLink(buy_links, 'apple books');

	const markup = `
		<div class="modal-book__wrapper">
        	<img class="modal-book__image" src="${book_image}" alt="${title}"/>
        	<div class="modal-book__info-wrap">
        		<h3 class="modal-book__title">${title}</h3>
		        <span class="modal-book__author">${author}</span>
		        <p class="modal-book__description">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quo facere quibusdam
			        necessitatibus ex odio quaerat.
				</p>
		        <ul class="modal-book__list">
		            <li class="modal-book__item">
						<a href="${amazonLink}" class="modal-book__link" target="_blank">
					    	<img
								class="modal-book__img-company modal-book__amazon-img"
								srcset="${amazon} 1x, ${amazon2x} 2x"
		        				src="${amazon}"
		        				alt="Amazon"
	                            width="62"
	                            height="19"
								loading="lazy"
			            	/>
					    </a>
					</li>
			        <li class="modal-book__item">
						<a href="${appleBooksLink}" class="modal-book__link" target="_blank">
							<img
								class="modal-book__img-company modal-book__apple-books-img"
								srcset="${appleBooks} 1x, ${appleBooks2x} 2x"
		        				src="${appleBooks}"
		        				alt="Apple books"
	                            width="33"
	                            height="32"
								loading="lazy"
			            	/>
					    </a>
					</li>
			    </ul>
        	</div>
        </div>`;

	return markup;
}
