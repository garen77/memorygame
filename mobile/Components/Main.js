import React from "react";

import { StyleSheet, Text, View } from 'react-native';

import Login from "./Login";
import Game from "./Game";
import Navbar from "./Navbar";
import EndGame from "./EndGame";

class Main extends React.Component {
  state = {
    showLogin: true,
    showEndGame: false,
    name: "",
    score: 0,
  };

  handleLogin = (name, boolean) => {
    this.setState({ name: name, showLogin: boolean });
  };

  handleEndGame = (boolean) => {
    if (boolean) {
      this.setState({ showEndGame: boolean, score: this.state.score + 1 });
    } else {
      this.setState({ showEndGame: boolean });
    }
  };
  render() {
    const { showLogin, name, score, showEndGame } = this.state;
    return (
      <View state={styles.container}>
        {showLogin ? <Login name={this.handleLogin} /> : null}
        {showEndGame ? <EndGame newGame={this.handleEndGame} /> : null}
        <Navbar name={name} score={score} />
        <Game endGame={this.handleEndGame} />
      </View>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#eee'
  }, 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});