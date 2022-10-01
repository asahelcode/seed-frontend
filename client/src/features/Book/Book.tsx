import React from 'react'
import { BookProp } from '../../interfaces'
import { Button, Container } from '@material-ui/core'
import { Rating, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { format } from 'timeago.js'
import parser from 'html-react-parser'
import useStyle from './styles'

const Book = ({ book }: BookProp) => {
  const classes = useStyle()

  // const review = book.review.replace(/<[^>]*>/g, '');

  return (
    <Container maxWidth='md' >
      <Stack direction='row' justifyContent='center' m={2}>
        <img src={book.cover} alt="" className={classes.bookCover} />
      </Stack>
      <Stack direction='column' alignItems='center' gap={0.7}>
        <Stack>
          <Typography>Title: {book.name}</Typography>
          <Typography>Genres: {book.genre}</Typography>
          <Typography>Author: {book.author}</Typography>
          <Typography>Publisher: {book.publisher}</Typography>
        </Stack>
        <Rating name='half-rating' value={book.rating} readOnly precision={0.5} />
      </Stack>
      <Stack direction='row' justifyContent='center'>
        <Typography width='40ch'>
          {parser(book.review)}
        </Typography>
      </Stack>
      <Stack m={3} direction='row' justifyContent='center'>
        <Button variant='contained' color='secondary'>
          <a href={book.url} rel='noreferrer' target='_blank' className={classes.downloadlink}>Download</a>
        </Button>
      </Stack>
      <hr />
    </Container>
  )
}

export default Book