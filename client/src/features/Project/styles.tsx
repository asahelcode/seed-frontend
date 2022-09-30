import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  body: {
    zIndex: -1,
  },
  projectImg: {
    width: '300px',
    height: '250px',
    objectFit: 'cover',
    boxShadow: '1px 2px 2px rgba(0, 0, 0, 0.19)',
  },
  bisector: {
    border: 'none',
    height: '5px',
    width: '430px',
    boxShadow: '1px 2px 0.9px rgba(0, 0, 0, 0.18)'
  }
}))