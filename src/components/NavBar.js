import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  }
}

function NavBar(props) {
  const { classes, score, topScore } = props;
  return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <table width="100%">
            <tbody>
              <tr style={{verticalAlign: 'middle'}}>
                <td width="33%" className="mui--appbar-height" style={{textAlign: 'left', fontSize: "36px"}}>Click Game</td>
                <td width="33%" className="mui--appbar-height" style={{textAlign: 'center', fontSize: "24px"}}>Click A Picture To Begin</td>
                <td width="33%" className="mui--appbar-height" style={{textAlign: 'right', fontSize: "24px"}}>Score: {score} | Top Score: {topScore}</td>
              </tr>
            </tbody>
          </table>
        </AppBar>
      </div>
  )
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
