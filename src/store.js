import { observable, action, computed } from 'mobx';
import possibleWords from './words.js'

function setCharAt(string, index, character) {
  let stringArray = string.split('');
  stringArray = stringArray.filter((c) => c !== ' ');
  stringArray[index] = character;
  return stringArray.join('');
}

function timer() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve();
    }, 1000)
  );
}

class Store {
  @observable phase = 0;
  @observable goalWord = this.findGoalWord();
  @observable word = '____';
  @observable guess = '';
  @observable gameGoing = true;
  @observable winner = false;
  @observable guesses = [];

  findGoalWord() {
    let len = possibleWords.length;
    let index = Math.floor(Math.random() * len);
    return possibleWords[index];
  }

  @action
  changeGuess(newGuess) {
    let array = this.goalWord.split('');
    this.guess = newGuess;
    let found = false;
    
    for(let i = 0; i < array.length; i++) {
      if (this.guess === array[i]) {
        this.word = setCharAt(this.word, i, array[i]);
        found = true;
      }
    }
    
    for(let g of this.guesses) {
      if(g === this.guess) {
        found = true;
      }
	}
    
    if(!found) {
    	this.phase += 1;
    }
    
    this.guesses.push(this.guess);
    this.guess = '';
    this.resetGame();
  }

  @action
  resetGame() {
    if (this.word === this.goalWord 
        || this.phase === 5) {
      this.gameGoing = false;
      
      if (this.word === this.goalWord) {
        this.winner = true;
      }
      
      timer().then(() =>  {
        this.word = '____';
        this.goalWord = this.findGoalWord();
        this.phase = 0;
        this.guesses = [];
        this.gameGoing = true;
        this.winner = false;
      });
    }
  }
}

let store = new Store();

export default store;
