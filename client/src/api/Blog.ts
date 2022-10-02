import { BlogProp } from './../interfaces';
import axios from 'axios';

const baseUrl = 'http://localhost:5000';

export const getAllBlogs = () => axios.get(baseUrl);

export const createBlog = (data: BlogProp) => axios.post(baseUrl, data);

export const getBlogById = (id: number) => axios.get(`${baseUrl}/${id}`);
