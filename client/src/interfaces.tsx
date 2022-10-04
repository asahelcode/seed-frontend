export type ReqBlog = {
  title: string,
  tags: string[],
  description: string,
}

export type ReqBook = {
  cover: string,
  genre: string,
  author: string,
  publisher: string,
  rating: number,
  review: string,
  url: string,
  pages: number,
  name: string
}
export type BookProp = {
  _id: string;
  timestamp: string;
  cover: string;
  genre: string;
  author: string;
  publisher: string;
  rating: number;
  review: string;
  url: string;
  pages: number;
  name: string
}
export interface BlogProp {
  _id: number;
  timestamp: string;
  title: string;
  tags: string[];
  description: string;
}



export interface ReqProject {
  img: string;
  name: string;
  github: string;
  url: string;
  description: string;
  technologies: string[]
}