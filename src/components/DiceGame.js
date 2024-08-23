import React from "react";
import "../styles/Distyles.css";  // Link to your CSS

function DiceGame() {
    const randomNumber1 = Math.floor( Math.random() * 6 ) + 1;
    const randomImageSource1 = `${process.env.PUBLIC_URL}/assets/dice/dice${randomNumber1}.png`;

    const randomNumber2 = Math.floor( Math.random() * 6 ) + 1;
    const randomImageSource2 = `${process.env.PUBLIC_URL}/assets/dice/dice${randomNumber2}.png`;

    let resultText = "";
    if ( randomNumber1 > randomNumber2 ) {
        resultText = "🚩 Player 1 Wins!";
    } else if ( randomNumber2 > randomNumber1 ) {
        resultText = "Player 2 Wins! 🚩";
    } else {
        resultText = "Draw!";
    }

    return (
        <div className="dice-container">
            <h1>{ resultText }</h1>
            <p>Refresh me to get new results!</p>
            <div className="dice">
                <p>Player1</p>
                <img src={ randomImageSource1 } alt="dice" />
            </div>
            <div className="dice">
                <p>Player2</p>
                <img src={ randomImageSource2 } alt="dice" />
            </div>
        </div>
    );
}

export default DiceGame;
