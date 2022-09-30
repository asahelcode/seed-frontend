import { Container } from '@material-ui/core'
import { Stack } from '@mui/material'
import React from 'react'
import Project from '../features/Project/Project'

import projects from '../projects.json'
import useStyle from '../styles'

const Projects = () => {
  const classes = useStyle()
  return (
    <Container className={classes.projectBody}>
      {
        projects.map((project) => <Project key={project.id} project={project} />)
      }
    </Container>
  )
}

export default Projects