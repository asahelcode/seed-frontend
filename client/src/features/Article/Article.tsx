import React from 'react'
import { HomeArticlesProp } from '../../interfaces'
import { Container } from '@material-ui/core'
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import useStyle from './styles'

const Article = ({ article }: HomeArticlesProp) => {
  const classes = useStyle()

  return (
    <Container maxWidth='md' className={classes.article}>
      <Stack>
        <Typography fontFamily='Fira Sans' fontSize='13px' color='gray'>{article.duration}</Typography>
        <Typography variant='h4' fontFamily='Fira Sans' textTransform='capitalize'>{article.title}</Typography>
        <Stack direction='row' gap={1} mt={1}>
          {
            article.tags.map((item) => (
              <Typography fontFamily='Fira Sans' color='lightslategray' fontSize='14px'>{`#${item}`}</Typography>
            ))
          }
        </Stack>
        <Typography variant='h6' fontFamily='Alegreya' mt={2} lineHeight='29px'>
          {article.description.length > 100 ? article.description.substring(0, 230) + '...' : article.description}
          <Link to='/' className={classes.link}>
            dig in
          </Link>
        </Typography>
      </Stack>
      <hr className={classes.horizontalLine}/>
    </Container>
  )
}

export default Article