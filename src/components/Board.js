import React from 'react';
import Word from './Word';

class Board extends React.Component {


    render(){
        const words = this.props.words.map((word) => {
            return <Word key={word} letters={word} guessedLetters={this.props.guessedLetters} />
        })
        return(
            <div id="board">
                {words}
            </div>
        )
    }
}

export default Board;