import { ReqProject } from './../interfaces';
import axios from 'axios';

const baseUrl = 'https://seed-api-vc9u.onrender.com/project';

export const getProjects = () => axios.get(baseUrl);

export const createProject = (project: ReqProject) =>
  axios.post(baseUrl, project);
