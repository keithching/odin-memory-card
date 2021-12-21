import React, { useState, useEffect } from 'react';
import './App.css';

// import components
import CardSlot from './components/CardSlot';
import Scoreboard from './components/Scoreboard';

// import assets
import cardsArray from './assets.js';

function App() {
  
  // need to create a number of unique cards.. 
  // and then spread into the cards state as initial value

  const [ cards, setCards ] = useState(cardsArray);
  useEffect(() => { // invoke when component mounts. Execute as a side effect at the background
    
    function shuffleCards () { // card shuffling logic
      setCards((prevCards) => {
        let newCards = [...prevCards];

        for (let i = newCards.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
        }

        return newCards;
      });
    }
    // card shuffling logic reference to:
    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array


    const DOMcards = document.getElementsByClassName('card');
    const DOMcardsArray = [...DOMcards];
    DOMcardsArray.forEach(card => card.addEventListener('click', shuffleCards));

    return () => {
      DOMcardsArray.forEach(card => card.removeEventListener('click', shuffleCards));
    };

  }, []);

  const [ currentScore, setCurrentScore ] = useState(0);

  const [ bestScore, setBestScore ] = useState(0);
  useEffect(() => {

    setBestScore(prevBestScore => {
      if (currentScore > prevBestScore) {
          return currentScore;
      } else {
          return prevBestScore;
      }
  });

  }, [currentScore]); // invoke the effect only when the current score DOM get updated

  
  return (
    <div>
      <CardSlot 
        cards={cards}
        setCards={setCards}
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}

      />
      <Scoreboard 
        currentScore={currentScore} 
        bestScore={bestScore}
      />
    </div>
  );
}

export default App;
