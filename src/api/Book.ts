import axios from 'axios';

const baseUrl = 'https://seed-api-vc9u.onrender.com/book';

export const getBooks = () => axios.get(baseUrl);

export const createBook = (book: any) => axios.post(baseUrl, book);
