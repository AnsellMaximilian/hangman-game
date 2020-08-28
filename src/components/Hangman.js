import React from 'react';
import '../css/hangman.css'

class Hangman extends React.Component {


    render(){
        const {guesses} = this.props
        return(
            <div id="hangman-container">
                <div id="hangman-stake">
                </div>
                <div id="hangman">
                    <div id="hangman-head" style={{display: guesses > 0 ? "block" : "none"}}>

                    </div>
                    <div id="hangman-body" style={{display: guesses > 1 ? "block" : "none"}}>
                        
                    </div>
                    <div id="hangman-leftarm" style={{display: guesses > 2 ? "block" : "none"}}>

                    </div>
                    <div id="hangman-rightarm" style={{display: guesses > 3 ? "block" : "none"}}>

                    </div>
                    <div id="hangman-leftleg" style={{display: guesses > 4 ? "block" : "none"}}>

                    </div>
                    <div id="hangman-rightleg" style={{display: guesses > 5 ? "block" : "none"}}>

                    </div>
                </div>
            </div>
        )
    }
}

export default Hangman;