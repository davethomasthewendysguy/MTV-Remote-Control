import React from 'react';
import GameLogo from '@assets/logo.png';

export const GameLogoContainer = ({gameState = 0}) => (
	<div className={`container pt-3 ${gameState === 1 ? 'position-absolute end-100': ''}`}>
		<div className="row justify-content-center">
			<img className="col-6 col-md-3 col-lg-2" src={GameLogo} />
		</div>
	</div>
);