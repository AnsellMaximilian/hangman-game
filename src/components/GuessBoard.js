import React from 'react';

class GuessBoard extends React.Component {
    state = {
        letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    }

    render(){
        const letterCards = this.state.letters.split("").map((letter) => {
            return (
                <div 
                    onClick={() => this.props.handleClick(letter)} 
                    key={letter} 
                    className={this.props.guessedLetters.includes(letter) ? "letter-card guessed-card" : "letter-card"}
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