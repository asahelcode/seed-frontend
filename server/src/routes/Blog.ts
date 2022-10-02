import { getBlogPost, createBlogPost } from './../controllers/Blog';
import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

router.get('/', getBlogPost);

router.post('/', createBlogPost);

export default router;
