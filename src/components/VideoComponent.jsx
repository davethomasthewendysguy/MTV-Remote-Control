import React, { useState } from 'react';
import { useScrollSection, Section } from 'react-scroll-section';
import YouTube from 'react-youtube';

import { Placeholder } from '@components/Placeholder';

import Correct from '@assets/correct.jpg';
import TVLogo from '@assets/tv-logo.jpg';

export const VideoComponent = (props) => {
	const {activeVideo, videoId, gameVideos, setActiveVideo, ref} = props;
	
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

	const paddingClasses = [9, 6, 7, 2, 3, 4].includes(videoId) ? 'px-xxl-5' : '';
	const paddingClasses2 = [8, 5, 1].includes(videoId) ? 'px-xxl-5' : '';

	return (
		<Section id={`video-${videoId}`} className={`video-background d-flex col-12 col-md-3 col-xxl-3 position-relative justify-content-center ${paddingClasses} ${paddingClasses2}`} ref={(ref) ? ref : undefined}>
            <div className={`game-video-container justify-items-center u-position-relative`}>
				<div
					className={`game-video game-video-${videoId}`}
					onClick={() => {
						if (!guessState) {
							setActiveVideo(videoId);
						}
					}}
				  >
					{activeVideo !== videoId
						&& guessState === false
						&& (
							<>
								<div className="game-video-number">{videoId}</div>
								<Placeholder image={TVLogo} />
							</>
						)
					}
					{guessState === true
						&& (
							<>
								<div className="game-video-number">{videoId}</div>
								<Placeholder image={Correct} />
							</>
						)
					}

					{activeVideo === videoId
						&& guessState === false
						&& (
							<>
								<div className="game-video-number">{videoId}</div>
								<div className="frame-wrapper">
									<div className="frame-container">
										<YouTubeComponent
											id={gameVideos[videoId - 1].id}
											options={opts}
										/>
									</div>
								</div>
							</>
						)
					}
				</div>
			</div>
		</Section>
	);
}

export const YouTubeComponent = ({id , options}) => {
	const [played, setPlayed] = useState(false);

	return (
		<YouTube
			videoId={id}
			opts={options}
			controlsList={"noplaybackrate nodownload"}
			onReady={(e)=> {
				e.target.playVideo();
				setPlayed(true);
			}}
		/>
	)
}
