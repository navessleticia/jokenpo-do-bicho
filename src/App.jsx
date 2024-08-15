import React, { useState } from 'react';
import './App.css';

import characterSuccess from './assets/triste20.png';
import characterFailure from './assets/feliz.png';
import characterDefault from './assets/bicho.png';

function App() {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [gameStarted, setGameStarted] = useState(false);

  const choices = ['Pedra', 'Papel', 'Tesoura'];

  const startGame = () => {
    setPlayerChoice('');
    setComputerChoice('');
    setResult('');
    setGameStarted(true);
  };

  const playGame = (choice) => {
    setPlayerChoice(choice);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
    determineWinner(choice, randomChoice);
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      setResult('Você empatou com o Bicho! ele está te encarando 👽');
    } else if (
      (player === 'Pedra' && computer === 'Tesoura') ||
      (player === 'Papel' && computer === 'Pedra') ||
      (player === 'Tesoura' && computer === 'Papel')
    ) {
      setResult('Você ganhou do Bicho! ele está desolado 😖');
    } else {
      setResult('Você perdeu do Bicho! ele trouxe um amigo para te matar 😱');
    }
  };

  const resetGame = () => {
    setGameStarted(false);
  };

  let characterImage;
  if (result.includes('ganhou')) {
    characterImage = characterSuccess;
  } else if (result.includes('perdeu')) {
    characterImage = characterFailure;
  } else {
    characterImage = characterDefault;
  }

  return (
    <div className="App">
      <div className="game-container">
        <div className="game">
          <h2>Bem-vindo ao</h2>
          <h1>Jokenpo do Bicho</h1>
          <h2>Ganhe dele para sobreviver</h2>
          
          {!gameStarted ? (
            <button onClick={startGame}>Jogar</button>
          ) : (
            <>
              <div>
                <button onClick={() => playGame('Pedra')}>Pedra</button>
                <button onClick={() => playGame('Papel')}>Papel</button>
                <button onClick={() => playGame('Tesoura')}>Tesoura</button>
              </div>
              {result && (
                <>
                  <div className='frases'>
                    <h2>Você escolheu: {playerChoice}</h2>
                    <h2>O Bicho escolheu: {computerChoice}</h2>
                    <h2>Resultado: {result}</h2>
                  </div>
                  <button onClick={resetGame}>Jogar Novamente</button>
                </>
              )}
            </>
          )}
        </div>
        <div className="image-container">
          <img src={characterImage} alt="Personagem" className="character" />
        </div>
      </div>
    </div>
  );
}

export default App;
