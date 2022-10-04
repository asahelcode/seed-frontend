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
  blogDetailBody: {
    marginTop: '2.3em',
    backgroundColor: 'rgba(255, 255, 255, 0.73)'
  },
  homeBody: {
    backgroundColor: 'rgba(255, 255, 255, 0.89)'
  },
  form: {
    margin: '2em',
    padding: '30px',
  },
  rating: {
    padding: '1.2em',
    border: '1px solid lightslategray',
    borderRadius: '3px',
    "&:focus": {
      outline: '1px solid blue'
    }
  },
  textArea: {
    border: '1.5px solid lightslategray',
    borderRadius: '5px',
    outlineWidth: '0',
  }
}))