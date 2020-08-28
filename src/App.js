import React from 'react';
import Header from './components/Header';
import Hangman from './components/Hangman';
import Board from './components/Board';
import GuessBoard from './components/GuessBoard'

import GameOver from './components/GameOver'

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        words: ["YOU", "ARE", "A", "FAGGOT"],
        guessedLetters: [],
        guesses: 0,
        gameOver: false,
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

  resetGame = () => {
    fetch("https://random-word-api.herokuapp.com/word?number=1", {mode: "cors"})
      .then(function(response){
          return response.json();
      })
      .then((response) => {
          this.setState({
            words: response.map(function(word){return word.toUpperCase()}),
          });
      });
    this.setState({
      words: ["YOU", "ARE", "A", "FAGGOT"],
      guessedLetters: [],
      guesses: 0,
      gameOver: false,
    })
  }

  guessLetter = (letter) => {
    const {words, guessedLetters} = this.state;
    let guesses = words.join("").includes(letter) ? this.state.guesses : this.state.guesses + 1;
    guessedLetters.push(letter);

    this.setState({
      words: words,
      guessedLetters: guessedLetters,
      guesses: guesses,
      gameOver: (guesses > 5 || this.checkWin()),
      win: this.checkWin(),
    })
  }

  checkWin = () => {
    const {words, guessedLetters} = this.state;
    let win = true;
    words.join("").split("").forEach(function(letter){
      if(!guessedLetters.includes(letter)) win = false;
    })
    return win;

  }

  render(){
    
    return (
      <div className="App">
        <Header/>
        <Hangman guesses={this.state.guesses}/>
        <Board words={this.state.words} guessedLetters={this.state.guessedLetters}/>
        <GuessBoard handleClick={this.guessLetter} guessedLetters={this.state.guessedLetters}/>
        {this.state.gameOver ? <GameOver handleClick={this.resetGame} win={this.state.win} words={this.state.words}/> : null}
      </div>
    );
  }
  
}

export default App;
