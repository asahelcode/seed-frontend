export type ReqBlog = {
  title: string,
  tags: string[],
  description: string,
}
export interface BlogProp {
  blog: { id: string, timestamp: string, title: string, tags: string[], description: string }
}
export interface BookProp {
  book: { id: string, timestamp: string, cover: string, genre: string, author: string, publisher: string, rating: number, review: string, url: string, pages: number, name: string }
}

export interface ProjectProp {
  project: { id: string, img: string, name: string, github: string, url: string, description: string, technologies: string[] }
}