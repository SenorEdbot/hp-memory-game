import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import NavBar from './components/NavBar'
import Game from './components/Game'
// import Footer from './components/Footer'

// const characters = [harry, dobby, ginny, hagrid, hermione, luna, neville, mcgonagall, ron, snape, draco, voldemort]

class App extends Component {
  state = {
    topScore: 0,
    score: 0
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Header />
        <Game />
      </React.Fragment>
    );
  }
}

export default App;
