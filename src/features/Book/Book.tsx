import React from 'react'
import { BookProp } from '../../interfaces'
import { Button, Container } from '@material-ui/core'
import { Rating, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { format } from 'timeago.js'
import parser from 'html-react-parser'
import useStyle from './styles'
import { BookT } from '../../action/Book'

const Book = ({ _id, timestamp, cover, name, author, genre, publisher, rating, review, url, pages }: BookProp) => {
  const classes = useStyle()

  // const review = book.review.replace(/<[^>]*>/g, '');

  return (
    <Container maxWidth='md' >
      <Stack direction='row' justifyContent='center' m={2}>
        <img src={cover} alt="" className={classes.bookCover} />
      </Stack>
      <Stack direction='column' alignItems='center' gap={0.7}>
        <Stack>
          <Typography>Title: {name}</Typography>
          <Typography>Genres: {genre}</Typography>
          <Typography>Author: {author}</Typography>
          <Typography>Publisher: {publisher}</Typography>
        </Stack>
        <Rating name='half-rating' value={rating} readOnly precision={0.5} />
      </Stack>
      <Stack direction='row' justifyContent='center'>
        <Typography width='40ch'>
          {parser(review)}
        </Typography>
      </Stack>
      <Stack m={3} direction='row' justifyContent='center'>
        <Button variant='contained' color='secondary'>
          <a href={url} rel='noreferrer' target='_blank' className={classes.downloadlink}>Download</a>
        </Button>
      </Stack>
      <hr />
    </Container>
  )
}

export default Book