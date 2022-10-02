import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import BlogRoute from './routes/Blog.js';
import ProjectRoute from './routes/Project.js';
import BookRoute from './routes/Book.js';

const app: Application = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

const MONGODB_CONN_URL: string | undefined = process.env.CONNECTION_URL;
const PORT: number = Number(process.env.PORT);

app.use('/blog', BlogRoute);
app.use('/project', ProjectRoute);
app.use('/book', BookRoute);

mongoose.connect(String(MONGODB_CONN_URL)).then(() =>
  app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
  })
);
