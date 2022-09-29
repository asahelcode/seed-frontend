import React from 'react'
import { Container } from '@mui/material'
import Article from '../Article/Article';

import articles from '../../data.json';

import useStyle from './styles'

const HomeArticles = () => {
  const classes = useStyle()

  return (
    <Container maxWidth='md' className={classes.container}>
      {
        articles.map((item) => <Article key={item.id} article={item} />)
      }
    </Container>
  )
}

export default HomeArticles