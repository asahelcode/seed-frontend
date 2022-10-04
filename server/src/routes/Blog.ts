import { getBlogPost, createBlogPost, getBlogPostDetail } from './../controllers/Blog';
import express, { Router } from 'express';

const router: Router = express.Router();

router.get('/', getBlogPost);

router.post('/', createBlogPost);

router.get('/:id', getBlogPostDetail);

export default router;
