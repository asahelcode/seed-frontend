import React from 'react'
import { Container } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'
import TwitterIcon from '@material-ui/icons/Twitter'

import { format } from 'timeago.js'
import parser from 'html-react-parser'

import useStyle from '../styles'

import blogs from '../data.json';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs[0];

  const classes = useStyle();


  return (
    <Container maxWidth='md' className={classes.blogDetailBody}>
      <Stack direction='row' justifyContent='center'>
        <Typography sx={{ fontSize: { lg: '3em', xs: '1.5em' } }}>{blog.title}</Typography>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between' mt={2} borderBottom='1px solid gray' pb={2}>
        <Stack>
          <Typography fontSize='0.75em' color='rgba(0, 0, 10, 0.9)'>
            {format(blog.timestamp)}
          </Typography>
        </Stack>
        <Stack direction='row' gap={0.6}>
          {
            blog.tags.map((tag) => <Typography fontSize='0.75em' color='rgba(0, 0, 10, 0.8)'>{`#${tag}`}</Typography>)
          }
        </Stack>
      </Stack>
      <Stack mt={2}>
        <Typography fontFamily='Bellota' color='#000' variant='h6'>{parser(blog.description)}</Typography>
      </Stack>
      <Stack direction='row' justifyContent='flex-end' mt={3} alignItems='center' gap={1}>
        <a href={`http://twitter.com/share?text=${blog.title + ': ' + blog.description.substring(0, 80) + '...'}:&url=${window.location.href}&hashtags=#tech,#revolution`} rel='noreferrer' target='_blank'>Tweet</a>
        <TwitterIcon fontSize='small' />
      </Stack>
    </Container >
  )
}

export default BlogDetail