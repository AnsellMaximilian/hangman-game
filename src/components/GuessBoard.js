import React from 'react';

import '../css/guess-board.css';

class GuessBoard extends React.Component {
    state = {
        letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    }

    render(){
        const letterCards = this.state.letters.split("").map((letter) => {
            return (
                this.props.guessedLetters.includes(letter) ? 
                <div 
                    key={letter} 
                    className="letter-card guessed-card"
                >
                    {letter}
                </div>

                :

                <div 
                    onClick={() => this.props.handleClick(letter)} 
                    key={letter} 
                    className="letter-card"
                >
                    {letter}
                </div>
            )
        })
        return(
            <div id="guess-board">
                {letterCards}
            </div>
        )
    }
}

export default GuessBoard;