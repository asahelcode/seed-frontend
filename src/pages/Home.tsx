import React, { useEffect } from 'react'
import Hero from '../features/Hero/Hero'
import HomeBlog from '../features/HomeBlog/HomeBlogs'
import { Container } from '@material-ui/core'


import useStyle from '../styles'



const Home = () => {
  const classes = useStyle();

  return (
    <Container className={classes.homeBody}>
      <Hero />
      <HomeBlog />
    </Container>
  )
}

export default Home