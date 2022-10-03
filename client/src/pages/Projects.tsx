import { Container } from '@material-ui/core'
import React from 'react'
import Project from '../features/Project/Project'

import projects from '../projects.json'
import useStyle from '../styles'
import { RootState } from '../store/store'
import { useDispatch, useSelector } from 'react-redux';


const Projects = () => {
  const classes = useStyle()
  const dispatch = useDispatch();
  const projects = useSelector((state: RootState) => state.bookReducer)

  
  return (
    <Container className={classes.projectBody}>
      {
        projects.map((project) => <Project key={project.id} project={project} />)
      }
    </Container>
  )
}

export default Projects