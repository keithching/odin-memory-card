import React from 'react';
import '../styles/CardSlot.css';

const CardSlot = (props) => {

    const { cards, setCards, currentScore, setCurrentScore } = props;

    return (
        <div className="cards">
            {cards.map(card => {
                return (
                    <div 
                        key={card.id} 
                        className="card"
                        id={card.id}
                        onClick={() => {

                            const cardIsClicked = card.isClicked;

                            setCurrentScore(prevScore => {
                                if (!cardIsClicked) {
                                    return prevScore + 1;
                                } else {
                                    return 0;
                                }
                            });

                            setCards(prevCards => {
                                if (!cardIsClicked) {

                                    let newCards = [...prevCards];

                                    newCards.forEach(newCard => {
                                        if (newCard === card) {
                                            newCard.isClicked = true;
                                        }
                                    });

                                    return newCards;
                                } else {
                                    let newCards = [...prevCards];

                                    newCards.forEach(newCard => {
                                        newCard.isClicked = false;
                                    });

                                    return newCards;
                                }
                            });

                        }}
                    >
                        <img src={card.img} />
                        <div>{card.description}</div>
                        {/* <div>card id: {card.id}</div> */}
                        {/* <div>is clicked: {card.isClicked.toString()}</div> */}
                    </div>
                );
            })}
        </div>
    );

};


export default CardSlot;



