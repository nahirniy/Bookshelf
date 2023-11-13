import { refs } from '../refs';
import sprite from '../../images/icons/icons.svg';
import anime from 'animejs';

const { body, mobileMenuBtn, mobileMenu, mobileMenuIcon } = refs;

function toggleMobileMenu() {
	mobileMenu.classList.toggle('active');
	body.classList.toggle('overflow-hide');

	if (mobileMenu.classList.contains('active')) {
		animateIconChange(`${sprite}#icon-close`);
	} else {
		animateIconChange(`${sprite}#icon-burger`);
	}
}

function animateIconChange(newHref) {
	const pathIcon = mobileMenuIcon.firstElementChild;

	anime({
		targets: mobileMenuIcon,
		transform: 'scale(0)',
		duration: 300,
		easing: 'easeInQuad',
		complete: () => {
			pathIcon.setAttribute('href', newHref);

			anime({
				targets: mobileMenuIcon,
				transform: 'scale(1)',
				duration: 150,
				easing: 'easeInQuad',
			});
		},
	});
}

function activePage() {
	const activeLink = window.location.pathname;
	const links = [...document.querySelectorAll('.mobile-menu__link')];

	const currentLink = links.find(link => link.href.includes(activeLink));

	currentLink.classList.add('current-link');
}

activePage();
mobileMenuBtn.addEventListener('click', toggleMobileMenu);
