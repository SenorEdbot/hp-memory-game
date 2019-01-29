import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import harry from '../images/harryPotter.jpg'
import dobby from '../images/dobby.jpg'
import ginny from '../images/ginnyWeasley.jpg'
import hagrid from '../images/hagrid.jpg'
import hermione from '../images/hermioneGranger.jpg'
import luna from '../images/lunaLovegood.jpg'
import neville from '../images/nevilleLongbottom.jpg'
import mcgonagall from '../images/professorMcgonagall.jpg'
import ron from '../images/ronWeasley.jpg'
import snape from '../images/severusSnape.jpg'
import draco from '../images/dracoMalfoy.jpg'
import voldemort from '../images/voldemort.jpg'

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    paddingTop: "5vh"
  },
  gridList: {
    width: 800,
    height: 600
  },
  subheader: {
    width: "100%"
  }
});

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class Game extends Component {
  state = {
    haveBeenClicked: [],
    gameData: [
      {
        img: harry,
        name: "Harry Potter",
        alt: "Harry Potter",
        id: 1
      },
      {
        img: dobby,
        name: "Dobby",
        alt: "Dobby",
        id: 2
      },
      {
        img: ginny,
        name: "Ginny Weasley",
        alt: "Ginny Weasley",
        id: 3
      },
      {
        img: hagrid,
        name: "Rubeus Hagrid",
        alt: "Rubeus Hagrid",
        id: 4
      },
      {
        img: hermione,
        name: "Hermione Granger",
        alt: "Hermione Granger",
        id: 5
      },
      {
        img: luna,
        name: "Luna Lovegood",
        alt: "Luna Lovegood",
        id: 6
      },
      {
        img: voldemort,
        name: "Voldemort",
        alt: "Voldemort",
        id: 7
      },
      {
        img: mcgonagall,
        name: "Minerva McGonagall",
        alt: "Minerva McGonagall",
        id: 8
      },
      {
        img: ron,
        name: "Ron Weasley",
        alt: "Ron Weasley",
        id: 9
      },
      {
        img: snape,
        name: "Severus Snape",
        alt: "Severus Snape",
        id: 10
      },
      {
        img: draco,
        name: "Draco Malfoy",
        alt: "Draco Malfoy",
        id: 11
      },
      {
        img: neville,
        name: "Neville Longbottom",
        alt: "Neville Longbottom",
        id: 12
      }
    ]
  }

  handleClick(id) {
    if(this.state.haveBeenClicked.includes(id)) {
      this.props.resetScore()
      this.setState({ haveBeenClicked: [] })
      alert("Oh No! Please try again")
    } else {
      this.setState(prevState=>({
        haveBeenClicked: [...prevState.haveBeenClicked, id]
      }),() => {
        this.props.handleIncrement()
      })
    }
  }

  render() {
    const { classes } = this.props;
    const ShuffledGameData = shuffleArray(this.state.gameData);
    
    return (
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={4}>
          {ShuffledGameData.map((game, index) => (
            <GridListTile key={index} id={game.id} cols={game.cols || 1}>
              <img src={game.img} alt={game.alt} onClick={() => this.handleClick(game.id)} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
  }
}

Game.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Game)
