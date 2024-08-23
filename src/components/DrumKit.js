import React from "react";
import "../styles/Drstyles.css"; // Link to your CSS

function DrumKit() {

    const makeSound = ( key ) => {
        let audio;
        switch ( key ) {
            case "w":
                audio = new Audio( `${process.env.PUBLIC_URL}/assets/sounds/tom-1.mp3` );
                break;
            case "a":
                audio = new Audio( `${process.env.PUBLIC_URL}/assets/sounds/tom-2.mp3` );
                break;
            case "s":
                audio = new Audio( `${process.env.PUBLIC_URL}/assets/sounds/tom-3.mp3` );
                break;
            case "d":
                audio = new Audio( `${process.env.PUBLIC_URL}/assets/sounds/tom-4.mp3` );
                break;
            case "j":
                audio = new Audio( `${process.env.PUBLIC_URL}/assets/sounds/snare.mp3` );
                break;
            case "k":
                audio = new Audio( `${process.env.PUBLIC_URL}/assets/sounds/crash.mp3` );
                break;
            case "l":
                audio = new Audio( `${process.env.PUBLIC_URL}/assets/sounds/kick-bass.mp3` );
                break;
            default:
                break;
        }
        if ( audio ) {
            audio.play();
        }
    };

    const handleClick = ( key ) => {
        makeSound( key );
        buttonAnimation( key );
    };

    document.addEventListener( "keypress", function ( event ) {
        makeSound( event.key );
        buttonAnimation( event.key );
    } );

    const buttonAnimation = ( currentKey ) => {
        const activeButton = document.querySelector( "." + currentKey );
        if ( activeButton ) {
            activeButton.classList.add( "pressed" );
            setTimeout( () => {
                activeButton.classList.remove( "pressed" );
            }, 100 );
        }
    };

    return (
        <div className="drum-container">
            <h1>Drum 🥁 Kit</h1>
            <div className="set">
                { [ "w", "a", "s", "d", "j", "k", "l" ].map( ( key ) => (
                    <button key={ key } className={ `${key} drum` } onClick={ () => handleClick( key ) }>
                        { key }
                    </button>
                ) ) }
            </div>
        </div>
    );
}

export default DrumKit;
