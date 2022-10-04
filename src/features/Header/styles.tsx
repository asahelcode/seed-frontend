import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  header: {
    padding: '1em',
    textAlign: 'center',
    backgroundColor: 'white',
    color: '#000',
  },
  button: {
    position: 'absolute',
    right: '10px',
    top: '0'
  },
  link: {
    color: '#000',
    textDecoration: 'none'
  },
  menu: {
    display: 'none'
  },
  mobile: {
    display: 'none !important'
  },
  addText: {
    textDecoration: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    link: {
      display: 'none'
    },
    button: {
      display: 'none'
    },
    menu: {
      display: 'flex'
    },
    close: {
      display: 'flex',
      zIndex: 10
    },
    menuTitle: {
      display: 'flex',
      paddingLeft: '10px'
    },
    // menuContainer: {
    //   display: 'flex',
    //   justifyContent: 'space-between',
    //   alignItems: 'center',
    // },
    menuItems: {
      backgroundColor: '#fff',
      zIndex: 10,
    },
    menuLink: {
      textDecoration: 'none',
      color: '#000',
      margin: '0.5em 0'
    },
    mobile: {
      display: 'flex !important'
    },
  }
}))