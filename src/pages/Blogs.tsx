import React, { useEffect } from 'react'
import { Container } from '@material-ui/core';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store';

import Blog from '../features/Blog/Blog';
import useStyles from '../styles'
import { getBlogs } from '../action/Blog';
import { BlogProp } from '../interfaces';


const Blogs = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const blogs = useSelector((state: RootState) => state.blogReducer)

  useEffect(() => {
    dispatch(getBlogs())
  }, [])

  return (
    <Container className={classes.body}>
      <Typography variant='h5' color='lightslategrey' textAlign='center' fontFamily='Festive' textTransform='capitalize' mt={4}>
        "Because the one who are crazy enough to think that<br /> they can change the world are the ones who do."
      </Typography>
      {
        blogs.map((item: BlogProp) => <Blog key={item._id} title={item.title} tags={item.tags} description={item.description} timestamp={item.timestamp} _id={item._id} />)
      }
    </Container >
  )
}

export default Blogs