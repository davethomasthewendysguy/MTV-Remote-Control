import React, {  useEffect, useState, useRef } from 'react';
// import { soundex } from 'soundex-code';
import { useScrollSection, Section } from 'react-scroll-section';

import { AboutAuthor } from '@components/AboutAuthor';
import { GameLogoContainer } from '@components/GameLogoContainer';
import { GameStats } from '@components/GameStats';
import { Intro } from '@components/Intro';
import { VideoComponent } from '@components/VideoComponent';

import VanHalen from '@assets/vanhalen.jpg';
import VideoList from '@assets/videoList.json';
import WinVideo1 from '@assets/win1.mp4';
import WinVideo2 from '@assets/win2.mp4';
import WinVideo3 from '@assets/win3.mp4';

const winVideos = [
	WinVideo1,
	WinVideo2,
	WinVideo3,
];

/*******************
GAME STATE INDEX
0 - Initial
1 - Game Started
2 - Win
3 - Lose
4 - About Author
5 - User Stats
*******************/

const gameClock = 120;

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

const WinScreen = ({gameVideos, resetGame}) => {
	const WinVideo = winVideos[Math.floor(Math.random() * winVideos.length)];

	return (
		<>
			<div className="container pb-5">
				<div className="row justify-content-center">
					<div className="col-12 col-md-6 mt-4">
						<video className="m-auto w-100 text-center border-5 rounded-4"
							controls
							preload="metadata"
							autoPlay
						>
							<source src={WinVideo} type="video/mp4" />

							You win but your browser does not support the video element.
						</video>
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-lg-10 col-xl-8 mt-5 m-auto px-4 py-3 text-white fs-5">
						<p className="m-0 u-text-shadow">Your videos were:</p>
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-lg-10 col-xl-8 m-auto px-4 py-3 rounded-4 text-white fs-6 u-game-window-background">
						<ol className="d-flex flex-wrap ps-3">
							{gameVideos.map((video, idx) => {
								const {
									artist,
									song,
									album,
									release_year
								} = video;

								const classes = idx % 2 === 0 ? "col-12 flex-shrink col-md-6 pb-2 pe-4" : "col-12 flex-shrink col-md-6 pb-2 ps-2";

								return (
									<li
										key={idx}
										className={classes}
									>
										<div>{artist} - {song}<br />
										Album: {album} ({release_year})</div>
									</li>
								);
							})}
						</ol>
						<div className="container">
							<div className="row">
							<button
								className="col-12 col-md-4 col-lg-3 mt-3 px-3 py-2 m-auto text-black text-center start-game"
								onClick={() => resetGame()}>
									Play Again?
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

const LoseScreen = ({gameVideos, resetGame, setVideoArray}) => {
	const totalGuessed = gameVideos.filter((video) => video.guessed).length || 0;

	return (
		<div className="container">
			<div className="row">
				<div className="col-12 lose-screen text-white text-center fs-3 u-text-shadow">Game Over! You guessed {totalGuessed} out of 9.</div>
			</div>
			<div className="row">
				<div className="col-12 col-md-10 col-xl-8 mt-5 m-auto px-4 py-3 text-white fs-5">
					<p className="m-0 u-text-shadow">Your score was:</p>
				</div>
				<div className="col-12 col-md-10 col-xl-8 m-auto px-4 py-3 rounded-4 text-white fs-6 u-game-window-background">
					<ol className="d-flex flex-wrap px-3">
					{gameVideos.map((video, idx) => {
						const {
							album,
							artist,
							guessed,
							release_year,
							revealAnswer,
							song,
						} = video;

						const classes = "col-12 col-lg-6 pb-2";

						// Some duplicate code, refactor
						if (guessed) {
							return (
								<li
									className={classes}
									key={idx}
								>
									<div>{artist} - {song}</div>
									Album: {album} ({release_year})
								</li>
							);
						} else if (revealAnswer) {
							return (
								<li
								className={classes}
									key={idx}
								>
									<div className="text-danger">{artist} - {song}<br />
									Album: {album} ({release_year})</div>
								</li>
							);
						} else {
							return (
								<li
									key={idx}
									className={classes}
									onClick={() => {
										gameVideos[idx].revealAnswer = true;
										const gameVideos2 = [...gameVideos];

										return setVideoArray(gameVideos2)
									}}
								>

									<div className="text-danger u-cursor-pointer">Missed</div>
								</li>
							);
						}
					})}
					</ol>
					
					<p>*Click to reveal video info</p>
					<div className="container">
						<div className="row">
							<button className="col-12 col-md-4 col-lg-3 col-xl-2 mt-3 px-3 py-2 m-auto text-black text-center start-game" onClick={() => resetGame()}>Play Again?</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const HomePage = () => {
	const randomVideos = VideoList.sort(() => Math.random() - Math.random());
	const formattedRandomVideos = formatDataHelper([...new Map(randomVideos.map((video) => [video["artist"], video])).values()]);

	const videoArray = formattedRandomVideos.slice(0, 9).map(video => {
		return {
			...video,
			guessed: false,
			revealAnswer: false,
		};
	})

	const [gameState, setGameState] = useState(2);
	const [activeVideo, setActiveVideo] = useState(null);
	const [gameVideos, setVideoArray] = useState(videoArray);
	const [timeLeft, setTimeLeft] = useState(gameClock);

	const videoSection1 = useScrollSection('video-1');
	const videoSection2 = useScrollSection('video-2');
	const videoSection3 = useScrollSection('video-3');
	const videoSection4 = useScrollSection('video-4');
	const videoSection5 = useScrollSection('video-5');
	const videoSection6 = useScrollSection('video-6');
	const videoSection7 = useScrollSection('video-7');
	const videoSection8 = useScrollSection('video-8');
	const videoSection9 = useScrollSection('video-9');

	const mountainBackground = gameState === 1 ? 'mountain-background' : '';

	// Update play count on game start
	useEffect(() => {
		if (gameState === 1 && timeLeft === 120) {
			const playCount = Number(localStorage.getItem('plays'));	

			if (playCount > 0) {
				localStorage.setItem('plays', playCount + 1);
			} else {
				localStorage.setItem('plays', 1);
			}
		}
	}, [gameState]);

	// Update game timer
	useEffect(() => {
		if (gameState === 1) {
			const newTimeLeft = timeLeft;

			const timer = setTimeout(() => {
				setTimeLeft(newTimeLeft - 1);

				if(newTimeLeft < 0) {
					const loseCount = Number(localStorage.getItem('losses'));	
					localStorage.setItem('wins', loseCount + 1);

					return setGameState(3);
				}
			}, 1000);

			return () => clearTimeout(timer);
		}
	}, [gameState, timeLeft]);

	function validateGuess(el, activeVideo) {
		const currentGuess = el.target.value.toLowerCase() || '';
		let currentAnswers = [gameVideos[activeVideo - 1].artist.toLowerCase()] || [];
		const currentAlternates = gameVideos[activeVideo - 1].alternates ? gameVideos[activeVideo - 1].alternates.map(name => name.toLowerCase()) : []

		// Combine artist and alternate spellings into one searchable value.
		currentAnswers = currentAnswers.concat(currentAlternates);

		if (Array.isArray(currentAnswers)
			&& currentAnswers.length > 0
			&& currentAnswers.includes(currentGuess)) {
			const updatedGameVideos = gameVideos;

			updatedGameVideos[activeVideo - 1].guessed = true;

			const correctGuesses = Number(localStorage.getItem('correctGuesses'));	
			localStorage.setItem('correctGuesses', correctGuesses + 1);

			let highestUnguessedIndex;

			// Find highest unguessed video to know where to loop back around
			for (let idx = updatedGameVideos.length - 1; idx >= 0; idx--) {
				if(updatedGameVideos[idx].guessed === false) {
					highestUnguessedIndex = idx;
					break;
				}
			}

			const nextIndex = updatedGameVideos.findIndex((el, idx) => {
				// If current element is not solved and it does not equal the active video
				if (el.guessed === false
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

			if (nextIndex === -1) {
				// Win Status
				setGameState(2);

				const winCount = Number(localStorage.getItem('wins'));	
				localStorage.setItem('wins', winCount + 1);
			} else {
				// Find next unguessed video
				el.target.value = '';

				// Maybe fetch new answer here so it doesn't have to refetch it on each keypress.
				setVideoArray(updatedGameVideos);
				setActiveVideo(nextIndex + 1);
				scrollToVideo(nextIndex + 1);
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


		if (nextIndex !== -1) {
			setActiveVideo(nextIndex + 1);

			scrollToVideo(nextIndex + 1);
		}
	}

	function scrollToVideo(index) {
		switch (index) {
			case 1:
				videoSection1.onClick();
				break;
			case 2:
				videoSection2.onClick();
				break;
			case 3:
				videoSection3.onClick();
				break;
			case 4:
				videoSection4.onClick();
				break;
			case 5:
				videoSection5.onClick();
				break;
			case 6:
				videoSection6.onClick();
				break;
			case 7:
				videoSection7.onClick();
				break;
			case 8:
				videoSection8.onClick();
				break;
			case 9:
				videoSection9.onClick();
				break;
			default:
				break;
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
		setTimeout(() => {
			scrollToVideo(1);
		}, 0);
	}

	function startGame() {
		setGameState(1);
		setActiveVideo(1);

		// Not sure why this is needed to get initial scrolling on mobile/tablet to work but it is.
		setTimeout(() => {
			scrollToVideo(1);
		}, 0);
	}

	function seeStats() {
		setGameState(5);
	}

	return (
		<div className="position-relative tile-background">
			{[1, 2, 3].includes(gameState) && (
				<GameLogoContainer
					gameState={gameState}
				/>
			)}

			{[5].includes(gameState) && (
				<GameStats
					gameState={gameState}
					setGameState={setGameState}
				/>
			)}

			<div className={`${mountainBackground} pt-3`}>
				{gameState === 0 && (
					<>
						<GameLogoContainer />
				
						<div className="container px-4">
							<div className="row">
								<h1 className="mt-2 p-0 w-100 text-center text-white fs-3 fw-bold u-text-shadow">Welcome to MTV Remote Control v0.9</h1>
								<Intro />
							</div>
							<div className="row">
								<div className="col-12 col-md-10 col-xl-6 mt-5 m-auto px-4 py-3 rounded-4 text-white fs-6 u-game-window-background">
									<p>Based on the hit gameshow from the late 80s on MTV, Remote Control asked contestants a series of pop culture themed trivia in an attempt to garner points. The contestant with the most points gets to go to the bonus round which you get to play today.</p>
									
									<p className="mb-0">The objective is simple: you have two minutes to guess the artist of a random assortment of 9 music videos. Clicking on the different TVs will switch videos. Guess them all and you'll win a brand new Zenith 19" color TV with remote control. Good luck!</p>
								</div>
							</div>
				
							<div className="row">
								<div className="col-12 col-md-4 col-lg-3 mt-4 m-auto p-3 text-center fs-6 rounded-4 text-white u-game-window-background">
									In memory of Ken Ober.
								</div>
							</div>
							<div className="row row-cols-2 justify-content-evenly justify-content-md-center">
								<button className="col-6 col-md-4 col-lg-3 col-xl-2 mt-3 me-md-2 px-3 py-2 text-black start-game" onClick={() => { startGame() } }>Start Bonus Round</button>
								<button className="col-6 col-md-4 col-lg-3 col-xl-2 mt-3 ms-md-2 px-3 py-2 text-black start-game" onClick={() => { seeStats() } }>See Stats</button>
							</div>
							<div className="row justify-content-evenly justify-content-md-end">
								<button className="col-12 col-md-2 mt-5 px-3 py-2 start-game" onClick={() => setGameState(4)}>About Author</button>
							</div>
						</div>
					</>
				)}

				{gameState === 1
					&& (
						<>
							<div className="answer-container">
								<input className="answer u-rounded-corners-sm" placeholder="Guess" onKeyUp={(e) => validateGuess(e, activeVideo) }/>
								<button className="skip-button u-rounded-corners-sm" onClick={() => gotoNextVideo(gameVideos, activeVideo)}>Skip Video</button>
								
								<span className={`${timeLeft > 20 || timeLeft <= 0 ? 'color-white' : 'color-white a-warning-flash'} timer u-margin-top-xs`}>
									{timeLeft > 0 ? `TIMER: ${timeLeft}` : 'Time\'s up!'}
								</span>
							</div>

							<div className="container mt-5    game-container">
								<div className="mountain pb-5 pb-lg-0">
									<div className="row justify-content-center game-row game-row-1 py-4 py-xxl-5">
										<VideoComponent
											activeVideo={activeVideo}
											videoId={8}
											gameVideos={gameVideos}
											setActiveVideo={setActiveVideo}
										/>
										<VideoComponent
											activeVideo={activeVideo}
											videoId={9}
											gameVideos={gameVideos}
											setActiveVideo={setActiveVideo}
										/>
									</div>
									<div className="row justify-content-center  py-4">
										<VideoComponent
											activeVideo={activeVideo}
											videoId={5}
											gameVideos={gameVideos}
											setActiveVideo={setActiveVideo}
										/>
										<VideoComponent
											activeVideo={activeVideo}
											videoId={6}
											gameVideos={gameVideos}
											setActiveVideo={setActiveVideo}
										/>
										<VideoComponent
											activeVideo={activeVideo}
											videoId={7}
											gameVideos={gameVideos}
											setActiveVideo={setActiveVideo}
										/>
									</div>
									<div className="row justify-content-center  py-4">
										<VideoComponent
											activeVideo={activeVideo} 
											videoId={1}
											gameVideos={gameVideos}
											setActiveVideo={setActiveVideo}
										/>
										<VideoComponent
											activeVideo={activeVideo} 
											videoId={2}
											gameVideos={gameVideos}
											setActiveVideo={setActiveVideo}
										/>
										<VideoComponent
											activeVideo={activeVideo} 
											videoId={3}
											gameVideos={gameVideos}
											setActiveVideo={setActiveVideo}
										/>
										<VideoComponent
											activeVideo={activeVideo} 
											videoId={4}
											gameVideos={gameVideos}
											setActiveVideo={setActiveVideo}
										/>
									</div>
								</div>
							</div>
						</>
					)
				}

				{gameState === 2
					&& (
						<div className="win-screen type-sans-serif u-margin-top-lg u-margin-bottom-med">
							<WinScreen
								gameVideos={gameVideos}
								resetGame={resetGame}
							/>
						</div>
					)
				}

				{gameState === 3
					&& (
						<LoseScreen
							gameVideos={gameVideos}
							resetGame={resetGame}
							setVideoArray={setVideoArray}
						/>
					)
				}

				{gameState === 4
					&& (
						<>
							<GameLogoContainer />
							<AboutAuthor setGameState={setGameState} />
						</>
					)
				}
			</div>
		</div>
	)
};

export default HomePage;
