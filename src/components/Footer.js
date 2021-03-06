import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'

const styles = {
  footer: {
    backgroundColor: "#bdbdbd"
  }
}


function Footer(props) {
  const { classes } = props
  return (
    <div className={classes.footer}>
      <Toolbar position="fixed">
        <table width="100%">
          <tbody>
            <tr style={{verticalAlign: 'bottom'}}>
              <td width="33%" className="mui--toolbar-height" style={{textAlign: 'left', fontSize: "14px"}}>Created by Eddie Franco</td>
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
