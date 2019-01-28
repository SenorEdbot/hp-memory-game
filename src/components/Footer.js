import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  }
}


function Footer(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Toolbar position="fixed">
        <table width="100%">
          <tbody>
            <tr style={{verticalAlign: 'middle'}}>
              <td width="33%" className="mui--toolbar-height" style={{textAlign: 'left', fontSize: "18px"}}>Clicky Game!</td>
            </tr>
          </tbody>
        </table>
      </Toolbar>
    </div>
  )
}

Footer.propType = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Footer)
