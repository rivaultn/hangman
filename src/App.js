import React, { Component } from 'react';
import GuessCount from './GuessCount'
import './App.css';
import Alphabet from "./Alphabet";
import WordLetter from "./wordLetter";

const WORDS = [
    'OPENCLASSROOM', 'KIWI', 'CHAISE', 'HORLOGE', 'FLEUR', 'CHIEN', 'BOUTEILLE', 'ORANGE', 'FRAISE', 'BANANE',
    'ROBE', 'FILLE', 'JARDIN', 'KAYAK','LAMPE', 'TELEVISION', 'ORDINATEUR', 'LIVRE', 'CLAVIER', 'VOITURE', 'FRUIT',
    'COUSSIN', 'COFFRE', 'COUVERTURE', 'PLANTE', 'TOMATE', 'CHAUSSURE'
]

const initialState = {
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    guesses: 0,
    matchedLetterIndices: [],
    nbCharacterToGuess: 0,
    nbErrorsTolerated: 3,
    finish: false
};

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {...initialState,
            word: this.generateWord()}
    }

    /** Reset the app **/
    reset = () => {
        this.setState(initialState)
        this.setState({matchedLetterIndices: [], word: this.generateWord()})
        this.setState((prevState) => ({ nbCharacterToGuess: this.getUniqueNbLetters(prevState.word)}))
    }

    /** set randomly the word to guess **/
    generateWord() { return WORDS[Math.floor((Math.random() * WORDS.length))] }

    /** init the number of distinct letters to guess **/
    componentWillMount(){
        const { word } = this.state
        this.setState({nbCharacterToGuess: this.getUniqueNbLetters(word)})
    }

    /** count the distinct letters of the word **/
    getUniqueNbLetters(word){
        return word.split('').filter(function(item, i, ar){ return ar.indexOf(item) === i; }).join('').length
    }

    /** handle a click on a letter of the virtual alphabet **/
    handleCharClick = alphabetChar => {
        const { alphabet, guesses } = this.state
        const newguesses = guesses + 1;

        this.checkCharacter(alphabetChar)

        const newAlphabet = alphabet.replace(alphabetChar, '')

        this.setState({guesses: newguesses, alphabet: newAlphabet})
    }

    /** check if the letter is included in the word to guess **/
    checkCharacter(clickedChar){
        const { matchedLetterIndices, nbCharacterToGuess, word } = this.state

        const letterMatched = word.split('').includes(clickedChar)

        if(letterMatched){
            matchedLetterIndices.push(clickedChar)

            /** if it was the last hidden letter **/
            if(matchedLetterIndices.length === nbCharacterToGuess){
                this.setState({finish: true})
            }
        }

        return letterMatched
    }

    /** make letter visible or hidden **/
    getFeedbackForWordLetter(character) {
        const { matchedLetterIndices } = this.state
        const letterMatched = matchedLetterIndices.includes(character)

        return letterMatched ? 'visible' : 'hidden'
    }

    render() {
        const { alphabet, finish, guesses, nbCharacterToGuess, nbErrorsTolerated, word } = this.state

        return (
          <div className="hangman">
              <header className="hangmanHeader">
                  <h1>Jeu de pendu</h1>
              </header>

              <div className="instructions">
                  La partie se termine lorsque vous avez trouvé le mot caché. Vous avez gagné seulement si vous
                  commettez moins de 3 erreurs.
                  Vous ne pouvez utiliser que les lettres ci dessous.
              </div>

              <GuessCount guesses={guesses} />

              <div className="word">
                  {word.split('').map((character, index) => (
                      <WordLetter
                          wordLetter={character}
                          feedback={this.getFeedbackForWordLetter(character)}
                          key={index}
                      />
                  ))}
              </div>

              {!finish ?
                  <div className="alphabet">
                      {alphabet.split('').map((alphabetChar, index) => (
                          <Alphabet className={"spanAlphabetCharacter"}
                                    key={index}
                                    alphabetChar={alphabetChar}
                                    index={index}
                                    onClick={this.handleCharClick}
                          />
                      ))}
                  </div>
                  :
                  <div className="result">
                      {(guesses < nbCharacterToGuess + nbErrorsTolerated ?
                          <div> Bravo ! Vous avez gagné ! </div>
                          :
                          <div> Désolé, vous avez perdu ! </div>
                      )}
                      <button onClick={this.reset} type="button">Nouvelle tentative</button>
                  </div>
              }
          </div>
        );
    }
}

export default App;
