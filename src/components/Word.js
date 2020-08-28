import React from 'react';
import Letter from './Letter';

class Word extends React.Component {


    render(){
        const letters = this.props.letters.split("").map((letter, id) => {
            return <Letter 
                value={this.props.guessedLetters.includes(letter) ? letter : " "} // if letter is not guessed, return blank
                key={id}
                maxWordLength={this.props.maxWordLength}
            />
        })
        return(
            <div className="word">
                {letters}
            </div>
        )
    }
}

export default Word;