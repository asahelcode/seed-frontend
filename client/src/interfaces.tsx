
export interface HomeArticlesProp {
  article: { id: string, duration: string, category: string, title: string, tags: string[], description: string }
}

export interface ProjectProp {
  project: { id: string, img: string, name: string, github: string, url: string, description: string, technologies: string[] }
}