import React from 'react';
import Word from './Word';

import '../css/board.css';

class Board extends React.Component {


    render(){
        const maxWordLength = this.props.words.sort(function(a, b){return b.length - a.length})[0].length
        const words = this.props.words.map((word) => {
            return <Word 
                maxWordLength={maxWordLength} 
                key={word} 
                letters={word} 
                guessedLetters={this.props.guessedLetters}  
            />
        })
        return(
            <div id="board">
                {words}
            </div>
        )
    }
}

export default Board;