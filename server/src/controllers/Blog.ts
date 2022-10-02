import { Request, Response } from 'express';
import BlogPost from '../models/BlogPost';

export const getBlogPost = async (_req: Request, res: Response) => {
  try {
    const posts = await BlogPost.find();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
  }
};

export const createBlogPost = async (_req: Request, res: Response) => {
  try {
    
  } catch (error) {
    
  }
}