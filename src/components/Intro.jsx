import React from 'react';
import ThemeSong from '@assets/theme.mp3';

export const Intro = () => (
	<div className="d-flex justify-content-center align-items-center mt-4 mx-auto w-100 text-center   themesong-container">
		<h3 className="d-inline-block align-middle me-4 text-white fs-6 fw-bold u-text-shadow-thin    play-themsong">Play Theme</h3>
		<audio className="themesong" controls>
			<source src={ThemeSong} type="audio/mpeg" />

			Your browser does not support the audio element.
		</audio>
	</div>
);
