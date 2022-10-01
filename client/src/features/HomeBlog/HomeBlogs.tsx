import React from 'react'
import { Container } from '@mui/material'
import Blog from '../Blog/Blog';

import blogs from '../../data.json';

import useStyle from './styles'

const HomeArticles = () => {
  const classes = useStyle()

  return (
    <Container maxWidth='md' className={classes.container}>
      {
        blogs.map((item) => <Blog key={item.id} blog={item} />)
      }
    </Container>
  )
}

export default HomeArticles