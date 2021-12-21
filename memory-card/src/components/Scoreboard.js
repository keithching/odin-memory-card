import React from 'react';

const Scoreboard = (props) => {

    const { currentScore, bestScore} = props;

    return (
        <div>
            <div>
                Current Score: {currentScore}
            </div>
            <div>
                Best Score: {bestScore}
            </div>
        </div>
    );

};


export default Scoreboard;



