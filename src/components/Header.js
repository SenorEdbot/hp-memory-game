import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import bkgImg from '../images/hpBackground3.jpg'

const styles = {
  root: {
    textAlign: "center",
    backgroundImage: `url(${bkgImg})`,
    minHeight: "40vh"
  },
  text: {
    paddingTop: "18vh"
  }
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.text}>
        <Typography component="h5" variant="h5" style={{color: "white"}} gutterBottom>
          Harry Potter Memory Click
        </Typography>
        <Typography component="h6" variant="h6" style={{color: "white", paddingBottom: "2em"}}>
          Click on an image to earn points, but don't click on any more than once!
        </Typography>
      </div>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
