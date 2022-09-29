import React, { useState } from 'react'
import { Container, AppBar, IconButton } from '@material-ui/core';
import { Stack, Typography, Box, Button } from '@mui/material'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
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
                <Stack direction='row' justifyContent='space-around' width='100vw'>
                  <Typography variant='h5' fontFamily='Lobster' className={classes.menuTitle}>Seed</Typography>
                  <Button onClick={() => setmenuState(!menuState)}><MenuIcon className={classes.menu} /></Button>
                </Stack> :
                <Stack className={classes.menuItems} position='absolute' right='0' width='85vw' height='100vh'>
                  <Stack direction='row' justifyContent='center' width='100%' mb={4}>
                    <Button onClick={() => setmenuState(!menuState)}><CloseIcon className={classes.close} /></Button>
                  </Stack>
                  <Stack gap={3}>
                    <Link to='/'>
                      <Typography>Home</Typography>
                    </Link>
                    <Link to='/projects'>
                      <Typography>Projects</Typography>
                    </Link>
                    <Stack direction='row' justifyContent='center' alignItems='center' ml={8}>
                      <Typography>Articles</Typography>
                      <Button>
                        <ArrowDropUpIcon fontSize='small' />
                      </Button>
                    </Stack>

                  </Stack>
                </Stack>
            }
            {/* <Stack className={classes.menuItems}>
              <Stack direction='column' className={classes.texts}>
                <Typography>Home</Typography>
                <Typography>Home</Typography>
                <Typography>Home</Typography>
                <Typography>Home</Typography>
              </Stack>
            </Stack> */}
          </Stack>
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
