import {  ReqBlog } from './../interfaces';
import axios from 'axios';

const baseUrl = 'http://localhost:5000/blog';

export const getAllBlogs = () => axios.get(baseUrl);

export const createBlog = (data: ReqBlog) => axios.post(baseUrl, data);

export const getBlogById = (id: number) => axios.get(`${baseUrl}/${id}`);
