import React from 'react';
import '../styles/Scoreboard.css';

const Scoreboard = (props) => {

    const { currentScore, bestScore} = props;

    return (
        <div className="scoreboard">
            <div className="currentscore">
                Current Score: {currentScore}
            </div>
            <div className="bestscore">
                Best Score: {bestScore}
            </div>
        </div>
    );

};


export default Scoreboard;



