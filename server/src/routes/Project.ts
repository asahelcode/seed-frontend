import { createProject } from './../controllers/Project';
import { getProjects } from '../controllers/Project';
import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

router.get('/', getProjects);

router.post('/', createProject);

export default router;
