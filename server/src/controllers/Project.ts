import { Request, Response } from 'express';
import Project from '../models/Project';

export const getProjects = async (_req: Request, res: Response) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
  }
};

export const createProject = async (_req: Request, res: Response) => {
  const body = _req.body;
  const newProject = new Project(body);

  try {
    await newProject.save();
    res.status(200).json('success');
  } catch (error) {
    console.log(error);
  }
};
