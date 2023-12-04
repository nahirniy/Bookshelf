import { loadFromLS, saveToLS } from '../helpers';
import { refs } from '../refs';

const { body, toggleTheme } = refs;
const LOCALSTORAGE_KEY = 'dark theme';

function switchTheme() {
	const darkTheme = toggleTheme.checked;
	body.classList.toggle('dark', darkTheme);
	saveToLS(LOCALSTORAGE_KEY, darkTheme);
}

function setCurrentTheme() {
	const darkTheme = loadFromLS(LOCALSTORAGE_KEY);
	body.classList.toggle('dark', darkTheme);
	toggleTheme.checked = darkTheme;
}

setCurrentTheme();

toggleTheme.addEventListener('change', switchTheme);
