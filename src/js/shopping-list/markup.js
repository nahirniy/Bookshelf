import { refs } from '../refs';
import amazon from '../../images/trading-platform/amazon.webp';
import amazon2x from '../../images/trading-platform/amazon@2x.webp';
import appleBooks from '../../images/trading-platform/apple-books.webp';
import appleBooks2x from '../../images/trading-platform/apple-books@2x.webp';
import sprite from '../../images/icons/icons.svg';

const { shoppingContentList } = refs;

function createLink(links, item) {
	return links.find(({ name }) => name.toLowerCase() === item).url;
}

export function createMarkup(basket) {
	const markup = basket
		.map(({ _id, book_image, list_name, title, author, buy_links }) => {
			const amazonLink = createLink(buy_links, 'amazon');
			const appleBooksLink = createLink(buy_links, 'apple books');

			return `<li class="shopping-content__item" data-id="${_id}">
                <img class="shopping-content__image" src="${book_image}" alt="${title}" />
                <div class="shopping-content__box">
                    <div class="shopping-content__header-wrapper">
                        <div class="shopping-content__head-box">
                            <h3 class="shopping-content__title">${title}</h3>
                            <span class="shopping-content__list-name">${list_name}</span>
                        </div>
                        <button class="shopping-content__delete-btn" type="button">					
                            <svg class="shopping-content__icon-trash">
						        <use href="${sprite}#icon-trash"></use>
					        </svg>
                        </button>
                    </div>
                    <p class="shopping-content__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quo facere quibusdam
                        necessitatibus ex odio quaerat mollitia modi minima.Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Dolorem quo facere quibusdam necessitatibus ex odio quaerat mollitia modi
                        minima.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quo facere quibusdam
                        necessitatibus ex odio quaerat mollitia modi minima
                    </p>
                    <div class="shopping-content__bottom-wrapper">
                        <span class="shopping-content__author">${author}</span>
                        <ul class="shopping-content__company-list">
                            <li class="shopping-content__company-item">
                                <a href="${amazonLink}" class="shopping-content__company-link" target="_blank">
                                    <img
                                        class="shopping-content__company-img shopping-content__amazon-img"
                                        srcset="${amazon} 1x, ${amazon2x} 2x"
                                        src="${amazon}"
                                        alt="Amazon"
                                        loading="lazy"
                                    />
                                </a>
                            </li>
                            <li class="shopping-content__company-item">
                                <a href="${appleBooksLink}" class="shopping-content__company-link" target="_blank">
                                    <img
                                        class="shopping-content__company-img shopping-content__apple-books-img"
                                        srcset="${appleBooks} 1x, ${appleBooks2x} 2x"
                                        src="${appleBooks}"
                                        alt="Apple books"
                                        loading="lazy"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>`;
		})
		.join('');

	shoppingContentList.innerHTML = markup;
}
