import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [progressText, setProgressText] = useState(`Let's Play`);
  const [answer, setAnswer] = useState(0);
  const [gameOn, setGameOn] = useState(false);
  const [userInput, setUserInput] = useState('');

  function startGame() {
    const newRandomNumber = Math.floor(Math.random() * 100) + 1;
    setProgressText('Enter A Number :)');
    setAnswer(newRandomNumber);
    setGameOn(true);
  }

  function checkAnswer() {
    if (inputValid(userInput)) {
      const userAnswer = +userInput;
      if (userAnswer > answer) {
        setProgressText(`Lower Than ${userAnswer}`);
      } else if (userAnswer < answer) {
        setProgressText(`Higher Than ${userAnswer}`);
      } else {
        setProgressText(`Yes! ${answer}`);
        setGameOn(false);
      }
      setUserInput('');
    } else {
      console.log('Invalid Input');
    }
  }

  function inputValid(input) {
    if (input.trim() === '' || isNaN(+input)) {
      return false;
    }
    return true;
  }

  function onUserInput(e) {
    setUserInput(e.target.value);
  }

  return (
    <div className='App'>
      <h2>Guess Number Between 1 to 100</h2>

      <div className='progress'>
        <h1>{progressText}</h1>
      </div>

      {gameOn ? (
        <div>
          <input
            className='inputBox'
            type='text'
            value={userInput}
            onChange={onUserInput}
          />
          <button className='button' onClick={checkAnswer}>
            Guess
          </button>
        </div>
      ) : (
        <button className='button' onClick={startGame}>
          Start New Game
        </button>
      )}
    </div>
  );
}

export default App;
