import React, { useEffect } from 'react'
import { Container } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { Stack, Typography, CircularProgress } from '@mui/material'
import TwitterIcon from '@material-ui/icons/Twitter'

import parser from 'html-react-parser'
import moment from 'moment'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'

import useStyle from '../styles'
import { fetchBlogById } from '../action/Blog'


const BlogDetail = () => {
  const { id } = useParams();
  const blog = useSelector((state: RootState) => id ? state.blogReducer.find((blog) => blog._id === id) : null);
  const dispatch = useDispatch();

  const classes = useStyle();

  useEffect(() => {
    dispatch(fetchBlogById(id));
  }, [])

  return (
    <Container maxWidth='md' className={classes.blogDetailBody}>
      {
        blog._id ? (
          <>
            <Stack direction='row' justifyContent='center'>
              <Typography sx={{ fontSize: { lg: '3em', xs: '1.5em' } }}>{blog.title}</Typography>
            </Stack>
            <Stack direction='row' alignItems='center' justifyContent='space-between' mt={2} borderBottom='1px solid gray' pb={2}>
              <Stack>
                <Typography fontSize='0.75em' color='rgba(0, 0, 10, 0.9)'>
                  {moment(blog.timestamp).fromNow()}
                </Typography>
              </Stack>
              <Stack direction='row' gap={0.6}>
                {
                  blog.tags.map((tag: any) => <Typography fontSize='0.75em' color='rgba(0, 0, 10, 0.8)'>{`#${tag}`}</Typography>)
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
          </>
        ) : (<CircularProgress />)
      }
    </Container >
  )
}

export default BlogDetail