import React from 'react'
import { Container } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'
import TwitterIcon from '@material-ui/icons/Twitter'

import useStyle from '../styles'

import articles from '../data.json';

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles[0];

  const classes = useStyle();


  return (
    <Container maxWidth='md' className={classes.articleDetailBody}>
      <Stack direction='row' justifyContent='center'>
        <Typography sx={{ fontSize: { lg: '3em', xs: '1.5em' } }}>{article.title}</Typography>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between' mt={2} borderBottom='1px solid gray' pb={2}>
        <Stack>
          <Typography fontSize='0.75em' color='rgba(0, 0, 10, 0.9)'>
            {article.duration}
          </Typography>
        </Stack>
        <Stack direction='row' gap={0.6}>
          {
            article.tags.map((tag) => <Typography fontSize='0.75em' color='rgba(0, 0, 10, 0.8)'>{`#${tag}`}</Typography>)
          }
        </Stack>
      </Stack>
      <Stack mt={2}>
        <Typography fontFamily='Bellota' color='#000' variant='h6'>{article.description}</Typography>
      </Stack>
      <Stack direction='row' justifyContent='flex-end' mt={3} alignItems='center' gap={1}>
        <a href={`http://twitter.com/share?text=${article.title + ': ' + article.description.substring(0, 80) + '...'}:&url=${window.location.href}&hashtags=#tech,#revolution`} rel='noreferrer' target='_blank'>Tweet</a>
        <TwitterIcon fontSize='small'/>
      </Stack>
    </Container >
  )
}

export default ArticleDetail