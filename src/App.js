import React from 'react';
import Header from './components/Header';
import Hangman from './components/Hangman';
import Board from './components/Board';
import GuessBoard from './components/GuessBoard'
import './App.css';

// import wordGetter from "./controller/wordGetter";

class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        words: ["YOU", "ARE", "A", "FAGGOT"],
        guessedLetters: [],
        guesses: 0
      }
  }

  componentDidMount(){
    fetch("https://random-word-api.herokuapp.com/word?number=1", {mode: "cors"})
            .then(function(response){
                return response.json();
            })
            .then((response) => {
                this.setState({
                  words: response.map(function(word){return word.toUpperCase()}),
                });
            });
  }

  guessLetter = (letter) => {
    const {words, guessedLetters} = this.state;
    guessedLetters.push(letter);

    this.setState({
      words: words,
      guessedLetters: guessedLetters
    })
  }

  render(){
    
    return (
      <div className="App">
        <Header/>
        <Hangman guesses={this.state.guesses}/>
        <Board words={this.state.words} guessedLetters={this.state.guessedLetters}/>
        <GuessBoard handleClick={this.guessLetter} guessedLetters={this.state.guessedLetters}/>
      </div>
    );
  }
  
}

export default App;
