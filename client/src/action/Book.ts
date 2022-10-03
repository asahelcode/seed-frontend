import { FETCH_ALL_BOOKS, CREATE_BOOK } from './../constants';

export type Book = {
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
}

export type bookDefaultType = CREATE_BOOK | FETCH_ALL_BOOKS;
