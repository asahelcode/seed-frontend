import axios from 'axios';

const baseUrl = 'http://localhost:5000/book';

export const getBooks = () => axios.get(baseUrl);

export const createBook = (book: any) => axios.post(baseUrl, book);
