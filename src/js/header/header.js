import { throttle } from 'lodash';
import { refs } from '../refs';

const { scrollBtn } = refs;

window.addEventListener('scroll', throttle(showScrollBtn, 300));
scrollBtn.addEventListener('click', handleScroll);

function showScrollBtn() {
	if (window.scrollY > 300) {
		scrollBtn.style.display = 'block';
	} else {
		scrollBtn.style.display = 'none';
	}
}

function handleScroll() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}
