import { Container } from '@material-ui/core'
import React, { useEffect } from 'react'
import Project from '../features/Project/Project'

import useStyle from '../styles'
import { RootState } from '../store/store'
import { useSelector, useDispatch } from 'react-redux';
import { getProjects, ProjectT } from '../action/Project'


const Projects = () => {
  const classes = useStyle()
  const dispatch = useDispatch();
  const projects = useSelector((state: RootState) => state.projectReducer)

  useEffect(() => {
    dispatch(getProjects())
  }, [])


  return (
    <Container className={classes.projectBody}>
      {
        projects.map((project: ProjectT) => <Project key={project._id} img={project.img} github={project.github} url={project.url} description={project.description} technologies={project.technologies} name={project.name} />)
      }
    </Container>
  )
}

export default Projects