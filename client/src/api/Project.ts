import { ReqProject } from './../interfaces';
import axios from 'axios';

const baseUrl = 'http://localhost:5000/project';

export const getProjects = () => axios.get(baseUrl);

export const createProject = (project: ReqProject) =>
  axios.post(baseUrl, project);
