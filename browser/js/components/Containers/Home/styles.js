'use strict';

import { blue300, blue600 } from 'material-ui/styles/colors'

const styles = {
  header: {
    marginTop: '56px',
    textAlign: 'center',
    fontSize: '100px',
    color: '#fdfdfd',
    fontWeight: 900,
    fontFamily: 'Helvetica Neue',
    textShadow: '0px 0px 10px black',
  },
  subHeader: {
    paddingLeft: '25vh',
    paddingRight: '25vh'
  },
  paperHeader: {
    backgroundColor: blue600,
    padding: '20px',
    marginBottom:'60px',
  },
  paperStyle: {
    background: 'url("/images/background/fractal-background.jpg") no-repeat center center fixed',
    WebkitBackgroundSize: 'cover',
    MozBackgroundSize: 'cover',
    OBackgroundSize: 'cover',
    backgroundSize: 'cover',
    width: '100%',
    height: 'calc(100vh)',
    // height: 'calc(100vh - 56px)',
    textAlign: 'center',
    // padding: '25vh',
    paddingTop: '15vh',
    paddingBottom: '20vh',
  },
  button: {
    boxShadow: '0px 0px 10px black',
  },
  hr: {
    marginTop: 0,
    border: '0',
    height: '1px',
    width: '50%',
    backgroundImage: 'linear-gradient(to right, transparent, white, transparent)'
  },
  p: {
    fontSize: '23px',
    color: 'white',
    fontWeight: 200,
    textShadow: '0px 0px 10px black, 0px 0px 10px black, 0px 0px 10px black',
    letterSpacing: '1px',
    marginBottom: '20px'
  },
  small: {
    fontSize: '14px',
    color: 'white',
    fontWeight: 200,
    textShadow: '0px 0px 10px black, 0px 0px 10px black, 0px 0px 10px black',
    letterSpacing: '1px',
    marginBottom: '20px'
  },
  center: {
    textAlign: 'center'
  }
}

export default styles;
