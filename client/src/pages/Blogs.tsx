import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { Stack, Typography } from '@mui/material';

import blogs from '../data.json';
import Blog from '../features/Blog/Blog';
import useStyles from '../styles'


const Articles = () => {
  const { category } = useParams();
  const classes = useStyles();

  return (
    <Container className={classes.body}>
      <Stack direction='row' gap={4} mt={3} sx={{ display: { lg: 'flex', xs: 'none' } }}>
        <Link to='/books' className={classes.articleOptionLink}>
          <Typography variant='h6'>Books</Typography>
        </Link>
        <Link to='/projects' className={classes.articleOptionLink}>
          <Typography variant='h6'>Projects</Typography>
        </Link>
      </Stack>
      <Typography variant='h4' textAlign='center' textTransform='capitalize' mt={4}>{category}</Typography>
      {
        blogs.map((item) => <Blog key={item.id} blog={item} />)
      }
    </Container >
  )
}

export default Articles