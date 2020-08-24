import React from 'react';
import '../css/hangman.css'

class Hangman extends React.Component {


    render(){
        return(
            <div id="hangman-container">
                <div id="hangman-stake">
                </div>
                <div id="hangman">
                    <div id="hangman-head">

                    </div>
                    <div id="hangman-body">
                        
                    </div>
                    <div id="hangman-arms">

                    </div>
                    <div id="hangman-legs">

                    </div>
                </div>
            </div>
        )
    }
}

export default Hangman;