import React from 'react';
import GameLogo from '@assets/logo.png';

const wins = localStorage.getItem('wins') || 0;
const losses = localStorage.getItem('losses') || 0;
const plays = localStorage.getItem('plays') || 0;
const correctGuesses = localStorage.getItem('correctGuesses') || 0;

export const GameStats = ({gameState = 1, setGameState}) => (
    <>
        <div className={`container pt-3 ${gameState === 1 ? 'position-absolute end-100': ''}`}>
            <div className="row justify-content-center">
                <img className="col-6 col-md-3 col-lg-2" src={GameLogo} />

                <h3 className="my-5 p-0 w-100 text-center text-white fs-3 fw-bold u-text-shadow">Here are your stats</h3>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12 col-md-8 m-auto px-4 py-3 rounded-4 text-white fs-6 u-game-window-background">
                    <div className="d-flex flex-wrap px-3">    
                        <div
                            className="w-100 pb-2"
                        >
                            Games Played: {plays}
                        </div>
                        <div
                            className="w-100 pb-2"
                        >
                            Wins: {wins}
                        </div>
                        <div
                            className="w-100 pb-2"
                        >
                            Losses: {losses}
                        </div>
                        <div
                            className="w-100 pb-2"
                        >
                            Win %: {plays === wins
                                    && plays != 0 ? "100%"
                                    : plays === 0 ? "Not available"
                                      : Math.round(wins / plays * 100) }
                        </div>
                        <div
                            className="w-100 pb-2"
                        >
                            Correct Guesses: {correctGuesses}
                        </div>
                    </div>
                    {/* <div className="container">
                        <div className="row">
                            <button className="col-12 col-md-4 col-lg-3 col-xl-2 mt-3 px-3 py-2 m-auto text-black text-center start-game" onClick={() => resetGame()}>Play Again?</button>
                        </div>
                    </div> */}
                </div>
                <div className="row justify-content-center">
                    <button className="start-game col-12 col-md-3 col-lg-2 mt-4 px-3 py-2" onClick={() => setGameState(0)}>Back</button>
                </div>
            </div>
        </div>
    </>
);