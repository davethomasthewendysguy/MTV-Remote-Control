import React, { useState, useEffect } from 'react';
import { soundex } from 'soundex-code'
import YouTube from 'react-youtube';

import Button from '@components/button';
import { Wrapper } from './styles';
import { increment, decrement } from './actions';
import { INCREMENT_ASYNC, DECREMENT_ASYNC } from './constants';

import Correct from '@assets/correct.jpg';
import GameLogo from '@assets/logo.png';
import ThemeSong from '@assets/theme.mp3';
import TVLogo from '@assets/tv-logo.jpg';
import WinVideo1 from '@assets/win1.mp4';
import WinVideo2 from '@assets/win2.mp4';
import WinVideo3 from '@assets/win3.mp4';

const winVideos = [
	WinVideo1,
	WinVideo2,
	WinVideo3,
];

let VideoList = require('@assets/videoList.json');

const imageStyle = { display: 'block', margin: 'auto' };

const gameClock = 120;

const Placeholder = ({videoId, image}) => <img className={`game-video-placeholder`} src={image} alt="Video Placeholder" />;

function formatDataHelper(randomVideos) {
	return randomVideos.map(video => {
		return {
			...video,
			artist: video.artist ? video.artist.replace(/\\/g, '') : '',
			song: video.song ? video.song.replace(/\\/g, '') : '',
			album: video.album ? video.album.replace(/\\/g, '') : '',
		};
	});
}

const Intro = () => {
	return (
		<div className="themesong-container u-margin-top-med">
			<h3 className="play-themsong type-sans-serif">Play Theme</h3>
			<audio className="themesong" controls>
				<source src={ThemeSong} type="audio/mpeg" />

			  	Your browser does not support the video element.
			</audio>
		</div>
	);
}

const WinScreen = ({gameVideos, resetGame}) => {
	const WinVideo = winVideos[Math.floor(Math.random() * winVideos.length)];

	return (
		<React.Fragment>
			<h3 className="u-text-center u-margin-top-none u-margin-bottom-sm">You Win!</h3>
			<video className="win-video u-text-center u-rounded-corners-lg" controls autoPlay>
				<source src={WinVideo} type="video/mp4" />

			  	Your browser does not support the video element.
			</video>
			<div className="win-video-container">
				<p className="type-size-med u-margin-bottom-none">Your videos were:</p>
				<div className="win-video-info u-padding-sm u-rounded-corners-lg">
					{gameVideos.map((video, idx) => {
						const {
							artist,
							song,
							album,
							release_year
						} = video;

						return (
							<p key={idx}>{idx + 1}: {artist} - {song}<br />
							Album: {album} ({release_year})</p>
						);
					})}
				</div>
				<button className="start-game type-sans-serif u-margin-top-med" onClick={() => resetGame()}>Play Again?</button>
			</div>
		</React.Fragment>
	);
}

const LoseScreen = ({gameVideos, resetGame, setVideoArray}) => {
	return (
		<React.Fragment>
			<div className="lose-screen type-sans-serif u-text-center u-margin-top-xxl">Game Over! You didn't successfully guess all 9.</div>
			<div className="win-video-container">
				<p className="type-size-med u-margin-bottom-none">Your score was:</p>
				<div className="win-video-info u-padding-sm u-rounded-corners-lg">
					{gameVideos.map((video, idx) => {
						const {
							album,
							artist,
							guessed,
							release_year,
							revealAnswer,
							song,
						} = video;

						if(guessed) {
							return (
								<p key={idx}>{idx + 1}: {artist} - {song}<br />
								Album: {album} ({release_year})</p>
							);
						} else if(revealAnswer) {
							return (
								<p key={idx} className="u-inline"><span>{idx + 1}:</span> <span className="color-red">{artist} - {song}<br />
								Album: {album} ({release_year})</span></p>
							);
						} else {
							return (
								<p key={idx} className="u-inline" onClick={() => {
									gameVideos[idx].revealAnswer = true;
									const gameVideos2 = [...gameVideos];

									return setVideoArray(gameVideos2)}
								}
								><span>{idx + 1}:</span> <span className="color-red u-cursor-pointer">Missed</span></p>
							);
						}
					})}
					<p>*Click to reveal video info</p>
				</div>
				<button className="start-game type-sans-serif u-margin-top-med" onClick={() => resetGame()}>Play Again?</button>
			</div>
		</React.Fragment>
	);
}


const YouTubeComponent = ({id , options}) => {
	const [played, setPlayed] = useState(false)
	return (
		<YouTube
			videoId={id}
			opts={options}
			onReady={(e)=>{
				console.log("ready:", e)
				e.target.playVideo();
				setPlayed(true);
			}}
		/>
	)
}

const VideoComponent = ({activeVideo, videoId, gameVideos, setActiveVideo}) => {
	const guessState = gameVideos[videoId - 1].guessed;
	const offset = gameVideos[videoId - 1].offset || 0;

	const opts = {
		playerVars: {
            autohide: 0,
            autoplay: 1,
            controls: 0,
			disablekb: 0,
			enablejsapi: 1,
			fs: 0,
			loop: 1,
			modestbranding: 1,
			playsinline: 1,
			rel: 0,
			showinfo: 0,
            start: offset,
      	},
    };

	return (
		<div id={`video-${videoId}`} className="game-video-container">
		  	<div className="u-display-flex u-position-relative">
			    <div className="game-video-number">{videoId}</div>
			    <div
					className={`game-video game-video-${videoId}`}
					onClick={() => {
			      		if(!guessState) {
			      			setActiveVideo(videoId);
			      		}
			      	}}
				  >
			      	{activeVideo !== videoId
			      		&& guessState === false
			      		&& (
			      			<Placeholder videoId={videoId} image={TVLogo} />
			      		)
			      	}
					{guessState === true
			      		&& (
			      			<Placeholder videoId={videoId} image={Correct} />
			      		)
			      	}

			      	{activeVideo === videoId
			      		&& guessState === false
			      		&& (
							<div className="frame-wrapper">
								<div className="frame-container">
									<YouTubeComponent
										id={gameVideos[videoId - 1].id}
										options={opts}
									/>
								</div>
							</div>
			      		)
			      	}
	      		</div>
	      	</div>
	    </div>
	);
}

const HomePage = ({ counter, dispatch }) => {
	const randomVideos = VideoList.sort(() => Math.random() - Math.random());
	const formattedRandomVideos = formatDataHelper([...new Map(randomVideos.map((video) => [video["artist"], video])).values()]);

	const videoArray = formattedRandomVideos.slice(0, 9).map(video => {
		return {
			...video,
			guessed: false,
			revealAnswer: false,
		};
	})

	const [gameState, setGameState] = useState(0);
	const [activeVideo, setActiveVideo] = useState(null);
	const [gameVideos, setVideoArray] = useState(videoArray);
	const [timeLeft, setTimeLeft] = useState(gameClock);

	const mountainBackground = gameState === 1 ? 'mountain-background' : '';

	useEffect(() => {
		if(gameState === 1) {
			const newTimeLeft = timeLeft;

			const timer = setTimeout(() => {
		    	setTimeLeft(newTimeLeft - 1);

		    	if(newTimeLeft < 0) {
					setGameState(3);
				}
		  	}, 1000);

		  	return () => clearTimeout(timer);
		}
	});

	function validateGuess(el, activeVideo) {
		const currentGuess = el.target.value.toLowerCase() || '';
		let currentAnswers = [gameVideos[activeVideo - 1].artist.toLowerCase()] || [];
		const currentAlternates = gameVideos[activeVideo - 1].alternates ? gameVideos[activeVideo - 1].alternates.map(name => name.toLowerCase()) : []

		// Combine artist and alternate spellings into one searchable value.
		currentAnswers = currentAnswers.concat(currentAlternates);

		if(Array.isArray(currentAnswers)
			&& currentAnswers.length > 0
			&& currentAnswers.includes(currentGuess)) {
			const updatedGameVideos = gameVideos;

			updatedGameVideos[activeVideo - 1].guessed = true;

			console.log("You guessed correctly!");

			let highestUnguessedIndex;

			// Find highest unguessed video to know where to loop back around
			for (var idx = updatedGameVideos.length - 1; idx >= 0; idx--) {
	 			if(updatedGameVideos[idx].guessed === false) {
	 				highestUnguessedIndex = idx;
	 				break;
	 			}
			}

			const nextIndex = updatedGameVideos.findIndex((el, idx) => {
				// If current element is not solved and it does not equal the active video
				if(el.guessed === false
					&& idx + 1 != activeVideo) {
					if(activeVideo === highestUnguessedIndex + 1) { // If already at highest unguessed video loop back around to the beginning
						return true;
					} else if(idx + 1 > activeVideo) { // Advance forward to the next unguessed video
						return true;
					} else if(highestUnguessedIndex < activeVideo) { // Loop back around if no higher indexed videos are unguessed
						return true;
					}
				}
			});

			console.log(nextIndex);

			if(nextIndex === -1) {
				// Win Status
				setGameState(2);
			} else {
				// Find next unguessed video
				el.target.value = '';

				// Maybe fetch new answer here so it doesn't have to refetch it on each keypress.
				setVideoArray(updatedGameVideos);
				setActiveVideo(nextIndex + 1);
			}
		}
	}

	function gotoNextVideo(gameVideos, activeVideo) {
		let highestUnguessedIndex;

		// Find highest unguessed video to know where to loop back around
		for (var idx = gameVideos.length - 1; idx >= 0; idx--) {
 			if(gameVideos[idx].guessed === false) {
 				highestUnguessedIndex = idx;
 				break;
 			}
		}

		const nextIndex = gameVideos.findIndex((el, idx) => {
			// If current element is not solved and it does not equal the active video
			if(el.guessed === false
				&& idx + 1 != activeVideo) {
				if(activeVideo === highestUnguessedIndex + 1) { // If already at highest unguessed video loop back around to the beginning
					return true;
				} else if(idx + 1 > activeVideo) { // Advance forward to the next unguessed video
					return true;
				}
			}
		});

		if(nextIndex !== -1) {
			setActiveVideo(nextIndex + 1);
		}
	}

	function resetGame() {
		const videoArray = formattedRandomVideos.slice(0, 9).map(video => {
			return {
				...video,
				guessed: false,
			};
		})

		setGameState(1);
		setActiveVideo(1);
		setVideoArray(videoArray);
		setTimeLeft(120);
	}

	return (
		<React.Fragment>
			<div className="tile-background">
				{gameState === 1
				 	&& gameState === 2
				 	&& gameState === 3
					&& (
						<img className="game-logo" src={GameLogo} />
					)
				}
				<div className={`${mountainBackground} u-padding-top-med`}>
					{gameState === 0
						&& (
							<div className="u-margin-bottom-med u-padding-left-med u-padding-right-med">
								<img className="intro-logo" src={GameLogo} />

								<h1 className="h1 type-sans-serif u-text-center">Welcome to MTV Remote Control v0.76</h1>
								<Intro />

								<div className="game-rules type-sans-serif u-rounded-corners-lg">
									Based on the hit gameshow from the late 80s on MTV, Remote Control asked contestants a series of pop culture themed trivia in an attempt to garner points. The contestant with the most points gets to go to the bonus round which you get to play today.<br /><br />The objective is simple: you have two minutes to guess the artist of a random assortment of 9 music videos. Clicking on the different TVs will switch videos. Guess them all and you win a brand new Zenith 19" color TV with remote control. Good luck!
								</div>

								<div className="in-memoriam type-sans-serif u-padding-sm u-rounded-corners-lg u-text-center">
									In memory of Ken Ober.
								</div>

								<button className="start-game type-sans-serif u-margin-top-med" onClick={() => {setGameState(1); setActiveVideo(1);} }>Start Bonus Round</button>

								<button className="about-author type-sans-serif" onClick={() => setGameState(4)}>About Author</button>
							</div>
						)
					}

					{gameState === 1
						&& (
							<React.Fragment>	
								<div className="answer-container type-sans-serif">
									<input className="answer u-rounded-corners-sm" placeholder="Guess" onKeyUp={(e) => validateGuess(e, activeVideo) }/>
									<button className="skip-button type-sans-serif u-rounded-corners-sm" onClick={() => gotoNextVideo(gameVideos, activeVideo)}>Skip Video</button>
									
									<span className={`${timeLeft > 20 || timeLeft <= 0 ? 'color-white' : 'color-white a-warning-flash'} timer u-margin-top-xs`}>
										{timeLeft > 0 ? `TIMER: ${timeLeft}` : 'Time\'s up!'}
									</span>
								</div>

								<section className="game-container u-margin-top-xl">
								    <div className="mountain">
								      <div className="game-row game-row-1 u-padding-top-med u-padding-bottom-med">
								      	<VideoComponent activeVideo={activeVideo} videoId={8} gameVideos={gameVideos} setActiveVideo={setActiveVideo} />
								      	<VideoComponent activeVideo={activeVideo} videoId={9} gameVideos={gameVideos} setActiveVideo={setActiveVideo} />
								      </div>
								      <div className="game-row game-row-2 u-padding-top-med u-padding-bottom-med">
								        <VideoComponent activeVideo={activeVideo} videoId={5} gameVideos={gameVideos} setActiveVideo={setActiveVideo} />
								      	<VideoComponent activeVideo={activeVideo} videoId={6} gameVideos={gameVideos} setActiveVideo={setActiveVideo} />
								      	<VideoComponent activeVideo={activeVideo} videoId={7} gameVideos={gameVideos} setActiveVideo={setActiveVideo} />
								      </div>
								      <div className="game-row game-row-3 u-padding-top-med u-padding-bottom-med">
								        <VideoComponent activeVideo={activeVideo} videoId={1} gameVideos={gameVideos} setActiveVideo={setActiveVideo} />
								      	<VideoComponent activeVideo={activeVideo} videoId={2} gameVideos={gameVideos} setActiveVideo={setActiveVideo} />
								      	<VideoComponent activeVideo={activeVideo} videoId={3} gameVideos={gameVideos} setActiveVideo={setActiveVideo} />
								      	<VideoComponent activeVideo={activeVideo} videoId={4} gameVideos={gameVideos} setActiveVideo={setActiveVideo} />
								      </div>
								    </div>
								</section>
							</React.Fragment>
						)
					}

					{gameState === 2
						&& (
							<div className="win-screen type-sans-serif u-margin-top-lg u-margin-bottom-med">
								<WinScreen gameVideos={gameVideos} resetGame={resetGame} />
							</div>
						)
					}

					{gameState === 3
						&& (
							<div className="win-screen type-sans-serif u-margin-top-lg">
								<LoseScreen gameVideos={gameVideos} resetGame={resetGame} setVideoArray={setVideoArray} />
							</div>
						)
					}

					{gameState === 4
						&& (
							<div className="author-info-container">
								<img className="intro-logo" src={GameLogo} />
								<div className="author-info type-sans-serif u-rounded-corners-lg u-margin-left-med u-margin-right-med">
									<p><b>Created by:</b> Dave Rottino</p>
									<p>This game was created out the love of the 80s. Maintaining and adding to this in my free time. Have a question, suggestion, comment, or bug?</p>
									<p><a className="animated-link" href="mailto:contact@mtvremotecontrol.site">E-mail me</a></p>

									<p>Front End web developer who's looking for work.</p>

									<p>I also do a podcast about video games. Take a listen if you'd like:</p>
									<p><a className="animated-link" href="https://www.ratedgforgamers.com">Rated G for Gamers Podcast</a></p>
								</div>
								<button className="start-game type-sans-serif u-margin-top-med" onClick={() => setGameState(0)}>Back</button>
							</div>
						)
					}
				</div>
			</div>
		</React.Fragment>
	)
};

export default HomePage;
