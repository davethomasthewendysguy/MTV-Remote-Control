import React from 'react';

export const AboutAuthor = ({setGameState}) => (
	<div className="container flex-wrap mb-5 px-4">
		<div className="row">
			<div className="col-12 col-md-10 col-xl-6 mt-4 m-auto px-4 py-3 rounded-4 text-white fs-6 u-game-window-background">
				<p><b>Created by:</b> Dave Rottino</p>
				<p>This game was created out the love for the 80s. Maintaining and adding to this in my free time. Have a question, suggestion, comment, or bug?</p>
				<p><a className="animated-link" href="mailto:contact@mtvremotecontrol.site">E-mail me</a></p>

				<p>Front End web developer who's looking for work.</p>
			</div>
		</div>
		<div className="row justify-content-center">
			<button className="start-game col-12 col-md-3 col-lg-2 mt-4 px-3 py-2" onClick={() => setGameState(0)}>Back</button>
		</div>
	</div>
);
