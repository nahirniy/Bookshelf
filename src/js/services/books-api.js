import axios from 'axios';

axios.defaults.baseURL = 'https://books-backend.p.goit.global';

export const getTopBooks = async () => {
	const response = await axios.get(`/books/top-books`).then(({ data }) => data);

	return response;
};

export const getCurrentBooks = async category => {
	const response = await axios
		.get(`/books/category?category=${category}`)
		.then(({ data }) => data);

	return response;
};

export const getBookById = async id => {
	const response = await axios.get(`/books/${id}`).then(({ data }) => data);

	return response;
};

export const getCategoryList = async () => {
	const response = await axios.get(`/books/category-list`).then(({ data }) => data);

	return response;
};
