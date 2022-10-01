import React from 'react'
import { HomeBlogProp } from '../../interfaces'
import { Container } from '@material-ui/core'
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import useStyle from './styles'

const Blog = ({ blog }: HomeBlogProp) => {
  const classes = useStyle()

  return (
    <Container maxWidth='md' className={classes.blog}>
      <Stack>
        <Typography fontFamily='Fira Sans' fontSize='13px' color='gray'>{blog.duration}</Typography>
        <Typography variant='h4' fontFamily='Fira Sans' textTransform='capitalize'>{blog.title}</Typography>
        <Stack direction='row' gap={1} mt={1}>
          {
            blog.tags.map((item) => (
              <Typography fontFamily='Fira Sans' color='lightslategray' fontSize='14px'>{`#${item}`}</Typography>
            ))
          }
        </Stack>
        <Typography variant='h6' fontFamily='Alegreya' mt={2} lineHeight='29px'>
          {blog.description.length > 100 ? blog.description.substring(0, 230) + '...' : blog.description}
          <Link to={`/blogdetail/${blog.id}`} className={classes.link}>
            dig in
          </Link>
        </Typography>
      </Stack>
      <hr className={classes.horizontalLine} />
    </Container>
  )
}

export default Blog