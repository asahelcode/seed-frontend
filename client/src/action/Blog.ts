import * as api from '../api/Blog';
import { CREATE_BLOG, FETCH_ALL_BLOG, GET_BLOG_DETAIL } from '../constants';

export const getBlogs = () => async (dispatch) => {
  try {
    const { data } = await api.getAllBlogs();
    dispatch({ type: FETCH_ALL_BLOG, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export interface Blog {
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
