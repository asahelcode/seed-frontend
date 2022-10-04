import { CREATE_PROJECT, FETCH_ALL_PROJECT } from './../constants';
import * as api from '../api/Project';
import { ReqProject } from '../interfaces';

export const getProjects = () => async (dispatch) => {
  try {
    const { data } = await api.getProjects();
    dispatch({ type: FETCH_ALL_PROJECT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createProject = (project: ReqProject) => async (dispatch) => {
  try {
    const { data } = await api.createProject(project);
    dispatch({ type: CREATE_PROJECT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export type ProjectT = {
  _id: number;
  img: string;
  github: string;
  name: string;
  url: string;
  description: string;
  technologies: string[];
};

export interface CREATE_PROJECT {
  type: typeof CREATE_PROJECT;
}

export interface FETCH_ALL_PROJECT {
  type: typeof FETCH_ALL_PROJECT;
  payload: Project[];
}

export type projectDispatchTypes = CREATE_PROJECT | FETCH_ALL_PROJECT;
