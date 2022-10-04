import React, { useEffect } from 'react'
import { Container } from '@material-ui/core';
import { Typography, CircularProgress } from '@mui/material';

import useStyles from '../styles'
import Book from '../features/Book/Book';


import { RootState } from '../store/store'
import { useDispatch, useSelector } from 'react-redux';
import { BookT, fetchAllBooks } from '../action/Book'
import { BookProp } from '../interfaces';

const Books = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => state.bookReducer)

  useEffect(() => {
    dispatch(fetchAllBooks())
  }, [])


  return (
    <Container className={classes.body}>
      {
        books.length !== 0 ? (
          <>
            <Typography variant='h5' color='lightslategrey' textAlign='center' fontFamily='Great Vibes' textTransform='capitalize' mt={4}>
              "... I Daniel understood by books ..."
            </Typography>
            {
              books.map((item: BookProp) => <Book key={item._id}
                _id={item._id} timestamp={item.timestamp} cover={item.cover} name={item.name} genre={item.genre} author={item.author} publisher={item.publisher} rating={item.rating} review={item.review} url={item.url} pages={item.pages}
              />)
            }
          </>
        ) : <CircularProgress />
      }
    </Container >
  )
}

export default Books