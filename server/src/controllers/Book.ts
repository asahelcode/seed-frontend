import { Response, Request } from 'express';
import Books from '../models/Books';

export const getBooks = async (_req: Request, res: Response) => {
  try {
    const books = await Books.find();
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
  }
};

export const createBook = async (_req: Request, res: Response) => {
  const body = _req.body;

  try {
    const newBook = new Books(body);
    await newBook.save();
    res.status(200).json('success');
  } catch (error) {
    console.log(error);
  }
};
