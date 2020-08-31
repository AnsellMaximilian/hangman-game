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
                    <div id="hangman-head" style={{animationName: guesses > 0 ? "draw" : "none"}}>

                    </div>
                    <div id="hangman-body" style={{animationName: guesses > 1 ? "draw" : "none"}}>
                        
                    </div>
                    <div id="hangman-leftarm" style={{animationName: guesses > 2 ? "draw" : "none"}}>

                    </div>
                    <div id="hangman-rightarm" style={{animationName: guesses > 3 ? "draw" : "none"}}>

                    </div>
                    <div id="hangman-leftleg" style={{animationName: guesses > 4 ? "draw" : "none"}}>

                    </div>
                    <div id="hangman-rightleg" style={{animationName: guesses > 5 ? "draw" : "none"}}>

                    </div>
                </div>
            </div>
        )
    }
}

export default Hangman;