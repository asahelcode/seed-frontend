import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { Stack, Typography } from '@mui/material';

import articles from '../data.json';
import Article from '../features/Article/Article';
import useStyles from '../styles'


const Articles = () => {
  const { category } = useParams();
  const classes = useStyles();

  return (
    <Container className={classes.body}>
      <Stack direction='row' gap={4} mt={3} sx={{ display: { lg: 'flex', xs: 'none' } }}>
        <Link to='/articles/books' className={classes.articleOptionLink}>
          <Typography variant='h6'>Books</Typography>
        </Link>
        <Link to='/articles/academics' className={classes.articleOptionLink}>
          <Typography variant='h6'>Academics</Typography>
        </Link>
        <Link to='/articles/softwares' className={classes.articleOptionLink}>
          <Typography variant='h6'>Softwares</Typography>
        </Link>
      </Stack>
      <Typography variant='h4' textAlign='center' textTransform='capitalize' mt={4}>{category}</Typography>
      {
        articles.map((item) => <Article key={item.id} article={item} />)
      }
    </Container >
  )
}

export default Articles