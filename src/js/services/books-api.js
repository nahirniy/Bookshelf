import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://books-backend.p.goit.global';

export const getBooks = async value => {
  const response = await axios
    .get(`/books/${value}`)
    .then(({ data }) => data)
    .catch(() => Notify.failure('Oops! Something went wrong...'));

  return response;
};
