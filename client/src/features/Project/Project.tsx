import { Container } from '@material-ui/core'
import { Stack, Box } from '@mui/material'
import React from 'react'
import useStyles from './styles'


import { ProjectProp } from '../../interfaces'

const Project = ({ project }: ProjectProp) => {
  const classes = useStyles();
  return (
    <Container maxWidth='md'>
      <Stack>
        <img src={project.img} alt="" className={classes.projectImg} />
      </Stack>
    </Container>
  )
}

export default Project