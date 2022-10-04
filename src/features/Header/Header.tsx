import React, { useState } from 'react'
import { Container, AppBar } from '@material-ui/core';
import { Stack, Typography, Box, Button } from '@mui/material'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './styles'
import { Link } from 'react-router-dom'

const Header = () => {
  const [menuState, setmenuState] = useState(false)
  const classes = useStyles();

  return (
    <Container maxWidth='md'>
      <AppBar position='static' className={classes.header}>
        <Stack direction='row' justifyContent='center' alignItems='center' position='relative'>
          <Stack direction='row' className={classes.menuContainer}>

            {
              !menuState ?
                <Stack direction='row' justifyContent='space-between' sx={{ width: { lg: '100%', xs: '75vw' } }}>
                  <Box>
                    <Typography variant='h5' fontFamily='Lobster' className={classes.mobile} >
                      Seed
                    </Typography>
                  </Box>
                  <Button onClick={() => setmenuState(!menuState)} className={classes.mobile} ><MenuIcon className={classes.menu} /></Button>
                </Stack> :
                <Stack className={classes.menuItems} position='fixed' ml={5} top='0' right='0' width='100vw' height='100vh'>
                  <Stack direction='row' justifyContent='center' width='100%' mb={3} mt={1}>
                    <Button onClick={() => setmenuState(!menuState)}><CloseIcon className={classes.close} /></Button>
                  </Stack>
                  <Stack gap={3}>
                    <Link to='/' className={classes.menuLink}>
                      <Typography>Home</Typography>
                    </Link>
                    <Link to='/projects' className={classes.menuLink}>
                      <Typography>Projects</Typography>
                    </Link>
                    <Link to='/blog' className={classes.menuLink}>
                      <Typography>Blog</Typography>
                    </Link>
                    <Link to='/books' className={classes.menuLink}>
                      <Typography>Books</Typography>
                    </Link>
                  </Stack>
                </Stack>
            }
          </Stack>
          <Stack direction='row' justifyContent='center' gap={10}>
            <Link to='/' className={classes.link}>
              <Typography variant='h6'>Home</Typography>
            </Link>
            <Link to='/projects' className={classes.link}>
              <Typography variant='h6'>Projects</Typography>
            </Link>
            <Link to='/books' className={classes.link}>
              <Typography variant='h6'>Books</Typography>
            </Link>
            <Link to='/blog' className={classes.link}>
              <Typography variant='h6'>Blog</Typography>
            </Link>
          </Stack>
          <Link to='/add' className={`${classes.button} ${classes.addText}`}>
            <Button variant='contained'>
              Add
            </Button>
          </Link>
        </Stack>
      </AppBar>
    </Container >
  )
}

export default Header
