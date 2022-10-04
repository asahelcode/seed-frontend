import React from 'react'
import { BlogProp } from '../../interfaces'
import { Container } from '@material-ui/core'
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import moment from 'moment'

import useStyle from './styles'

const Blog = ({ title, description, timestamp, tags, _id }: BlogProp) => {
  const classes = useStyle()

  const sanitizedDescription = description.replace(/<[^>]*>/g, '');

  return (
    <Container maxWidth='md' className={classes.blog}>
      <Stack>
        <Typography fontFamily='Fira Sans' fontSize='13px' color='gray'>
          {moment(timestamp).fromNow()}
        </Typography>
        <Typography variant='h4' fontFamily='Fira Sans' textTransform='capitalize'>{title}</Typography>
        <Stack direction='row' gap={1} mt={1}>
          {
            tags.map((item) => (
              <Typography fontFamily='Fira Sans' color='lightslategray' fontSize='14px'>{`#${item}`}</Typography>
            ))
          }
        </Stack>
        <Typography variant='h6' fontFamily='Alegreya' mt={2} lineHeight='29px'>
          {sanitizedDescription.length > 100 ? sanitizedDescription.substring(0, 230) + '...' : sanitizedDescription}
          <Link to={`/blogdetail/${_id}`} className={classes.link}>
            dig in
          </Link>
        </Typography>
      </Stack>
      <hr className={classes.horizontalLine} />
    </Container >
  )
}

export default Blog