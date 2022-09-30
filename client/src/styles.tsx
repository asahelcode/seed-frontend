import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  body: {
    marginTop: '0.9em',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  projectBody: {
    backgroundColor: 'rgba(255, 255, 255, 0.79)',
  },
  articleOptionLink: {
    color: '#000',
    textDecoration: 'none',
    "&:hover": {
      color: 'blue',
    }
  },
  articleDetailBody: {
    marginTop: '2.3em',
    backgroundColor: 'rgba(255, 255, 255, 0.73)'
  }
}))