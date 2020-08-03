import React from "../../node_modules/react";
import Images from "./Images";

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <Images endGame={this.props.endGame} />
      </div>
    );
  }
}

export default Game;
