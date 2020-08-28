import React from 'react';

import '../css/game-over.css';
class GameOver extends React.Component {

    render(){
        
        return(
            <div id="game-over" >
                <h1>GAME OVER</h1>
                <h2>YOU {this.props.win ? "WON" : "LOST"}, </h2>
                <h2>THE WORD WAS: <span id="guessed-word">{this.props.words}</span></h2>
                <h3 id="try-again-button" onClick={this.props.handleClick}>Try Again</h3>
            </div>
        )
    }
}

export default GameOver;