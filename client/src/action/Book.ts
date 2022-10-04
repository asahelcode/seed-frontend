import { ReqBook } from '../interfaces';
import { FETCH_ALL_BOOKS, CREATE_BOOK } from './../constants';
import * as api from '../api/Book';

export const fetchAllBooks = () => async (dispatch) => {
  try {
    const { data } = await api.getBooks();
    dispatch({ type: FETCH_ALL_BOOKS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createBook = (book: ReqBook) => async (dispatch) => {
  try {
    const { data } = await api.createBook(book);
    dispatch({ type: CREATE_BOOK, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export type BookT = {
  _id: number;
  timestamp: string;
  cover: string;
  name: string;
  genre: string;
  author: string;
  publisher: string;
  rating: number;
  review: string;
  url: string;
  pages: number;
};

export interface FETCH_ALL_BOOKS {
  type: typeof FETCH_ALL_BOOKS;
  payload: Book;
}

export interface CREATE_BOOK {
  type: typeof CREATE_BOOK;
  payload: Book;
}

export type bookDispatchType = CREATE_BOOK | FETCH_ALL_BOOKS;
