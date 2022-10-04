import { ReqBlog } from '../interfaces';
import axios from 'axios';

const baseUrl = 'https://seed-api-vc9u.onrender.com/blog';

export const getAllBlogs = () => axios.get(baseUrl);

export const createBlog = (data: ReqBlog) => axios.post(baseUrl, data);

export const getBlogById = (id: any) => axios.get((baseUrl + `/${id}`));
