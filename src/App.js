import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import NavBar from './components/NavBar'
import Game from './components/Game'
import Footer from './components/Footer'

class App extends Component {
  constructor(props, context){
    super(props, context);
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  state = {
    topScore: 0,
    score: 0
  }

  setTopScore= score => {
    this.setState({topScore: score})
  }

  resetScore = () => {
    this.setState(prevState => {
      return {score: prevState.score - prevState.score}
    })
  }

  handleIncrement = () => {
    this.setState(prevState => {
      if(prevState.score + 1 > prevState.topScore) {
        return {topScore: prevState.score + 1, score: prevState.score + 1}
      } else {
        return {score: prevState.score + 1}
      }
    })
  }
  
  render() {
    return (
      <React.Fragment>
        <NavBar score={this.state.score} topScore={this.state.topScore} />
        <Header />
        <Game score={this.state.score} setTopScore={this.setTopScore} resetScore={this.resetScore} handleIncrement={this.handleIncrement} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
