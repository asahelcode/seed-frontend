import React, { useEffect } from 'react'
import { Container, CircularProgress, Stack } from '@mui/material'
import Blog from '../Blog/Blog';
import { useSelector, useDispatch } from 'react-redux'
import { getBlogs } from '../../action/Blog'
import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'

import useStyle from './styles'
import { BlogProp } from '../../interfaces';

const HomeArticles = () => {
  const classes = useStyle()
  const blogs: any = useSelector((state: RootState) => state.blogReducer)
  const dispatch: AnyAction | Dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs())
  }, [dispatch])


  return (
    <Container maxWidth='md' className={classes.container}>

      {
        blogs.length !== 0 ? (
          blogs.slice(0, 3).map((item: BlogProp) => <Blog key={item._id} title={item.title} timestamp={item.timestamp} description={item.description} _id={item._id} tags={item.tags} />)
        ) : (
          <Stack direction='row' justifyContent='center'>
            <CircularProgress />
          </Stack>
        )
      }
    </Container>
  )
}

export default HomeArticles