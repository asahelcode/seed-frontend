import { Request, Response } from 'express';
import BlogPost from '../models/BlogPost';
import mongoose from 'mongoose';

export const getBlogPost = async (_req: Request, res: Response) => {
  try {
    const posts = await BlogPost.find();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
  }
};

export const createBlogPost = async (_req: Request, res: Response) => {
  const body = _req.body;
  const newBlogPost = new BlogPost(body);

  try {
    await newBlogPost.save();
    res.status(200).json('success');
  } catch (error) {
    console.log(error);
  }
};

export const getBlogPostDetail = async (_req: Request, res: Response) => {
  const { id: _id } = _req.params;

  if (!mongoose.isValidObjectId(_id))
    return res.status(404).json('Not a valid Id');

  try {
    const blogPost = await BlogPost.findById(_id);
    res.status(200).json(blogPost);
  } catch (error) {
    console.log(error);
  }
};
