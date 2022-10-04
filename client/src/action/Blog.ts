import { Dispatch } from '@reduxjs/toolkit';
import * as api from '../api/Blog';
import { CREATE_BLOG, FETCH_ALL_BLOG, GET_BLOG_DETAIL } from '../constants';
import { ReqBlog } from '../interfaces';

export const getBlogs = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.getAllBlogs();
    dispatch({ type: FETCH_ALL_BLOG, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const postBlog = (body: ReqBlog) => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.createBlog(body);
    dispatch({ type: CREATE_BLOG, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchBlogById = (blogId: any) => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.getBlogById(blogId);
    dispatch({ type: GET_BLOG_DETAIL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export interface Blog {
  _id: number;
  title: string;
  tags: string[];
  timestamp: string;
  description: string;
}

export interface CREATE_BLOG {
  type: typeof CREATE_BLOG;
  payload: Blog;
}

export interface FETCH_ALL_BLOG {
  type: typeof FETCH_ALL_BLOG;
  payload: Blog;
}

export interface GET_BLOG_DETAIL {
  type: typeof GET_BLOG_DETAIL;
  payload: Blog;
}

export type blogDispatchType = GET_BLOG_DETAIL | FETCH_ALL_BLOG | CREATE_BLOG;
