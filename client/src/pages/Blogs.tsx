import React from 'react'
import { Container } from '@material-ui/core';
import {  Typography } from '@mui/material';

import blogs from '../data.json';
import Blog from '../features/Blog/Blog';
import useStyles from '../styles'


const Articles = () => {
  const classes = useStyles();

  return (
    <Container className={classes.body}>
      <Typography variant='h5' color='lightslategrey' textAlign='center' fontFamily='Festive' textTransform='capitalize' mt={4}>
        "Because the one who are crazy enough to think that<br /> they can change the world are the ones who do."
      </Typography>
      {
        blogs.map((item) => <Blog key={item.id} blog={item} />)
      }
    </Container >
  )
}

export default Articles