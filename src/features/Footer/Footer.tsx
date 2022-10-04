import React from 'react'
import { Container, Typography } from '@material-ui/core'
import { Stack } from '@mui/material'
import useStyle from './styles'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
  const classes = useStyle()

  return (
    <Container maxWidth='md' className={classes.container}>
      <Stack justifyContent='center' alignItems='center'>
        <Stack direction='row' gap={3}>
          <Typography>
            <a href='https://www.linkedin.com/in/asahelcode/' target='_blank' rel='noreferrer'>
              <LinkedInIcon className={classes.linkedin}/>
            </a>
          </Typography>
          <Typography>
            <a href='https://twitter.com/asahel_code' target='_blank' rel='noreferrer'>
              <TwitterIcon className={classes.twitter}/>
            </a>
          </Typography>
          <Typography>
            <a href='https://github.com/asahelcode' target='_blank' rel='noreferrer'>
              <GitHubIcon className={classes.github}/>
            </a>
          </Typography>
        </Stack>
        <Typography variant='h6'>Developed with 💖 by @asahelcode</Typography>
      </Stack>
    </Container>
  )
}

export default Footer