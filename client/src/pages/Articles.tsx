import React from 'react'
import { useParams } from 'react-router-dom';
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
      <Typography variant='h5' textAlign='center' textTransform='capitalize' mt={4}>{category}</Typography>
      {
        articles.map((item) => <Article key={item.id} article={item} />)
      }
    </Container>
  )
}

export default Articles