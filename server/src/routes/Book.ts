import { createBook, getBooks } from './../controllers/Book';
import express, { Router } from 'express';

const router: Router = express.Router();

router.get('/', getBooks);

router.post('/', createBook);

export default router;
