import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to the FunFusion Hub</h1>
            <nav>
                <ul>
                    <li><Link to="/dice-game">Dice Game</Link></li>
                    <li><Link to="/drum-kit">Drum Kit</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;
