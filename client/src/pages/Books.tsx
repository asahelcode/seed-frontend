import React from 'react'
import { Container } from '@material-ui/core';
import { Typography } from '@mui/material';

import books from '../book.json';
import useStyles from '../styles'
import Book from '../features/Book/Book';


const Books = () => {
  const classes = useStyles();

  return (
    <Container className={classes.body}>
      <Typography variant='h5' color='lightslategrey' textAlign='center' fontFamily='Great Vibes' textTransform='capitalize' mt={4}>
        "... I Daniel understood by books ..."
      </Typography>
      {
        books.map((item) => <Book key={item.id} book={item} />)
      }
    </Container >
  )
}

export default Books