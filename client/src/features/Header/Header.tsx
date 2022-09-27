import React from 'react'
import { Container, AppBar } from '@material-ui/core';
import { Stack, Typography, Box, Button } from '@mui/material'
import useStyles from './styles'
import { Link } from 'react-router-dom'

const Header = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='md'>
      <AppBar position='static' className={classes.header}>
        <Stack direction='row' justifyContent='center' alignItems='center' position='relative'>
          <Stack direction='row' justifyContent='center' gap={10}>
            <Link to='/' className={classes.link}>
              <Typography variant='h6'>Home</Typography>
            </Link>
            <Link to='/projects' className={classes.link}>
              <Typography variant='h6'>Projects</Typography>
            </Link>
            <Link to='/articles' className={classes.link}>
              <Typography variant='h6'>Articles</Typography>
            </Link>
          </Stack>
          <Link to='/add' className={classes.button}>
            <Button variant='contained'>
              Add
            </Button>
          </Link>
        </Stack>
      </AppBar>
    </Container>
  )
}

export default Header
