import { createGlobalStyle } from 'styled-components';
import tileBackground from '@assets/tile-background.jpg';
import mountainBackground from '@assets/game-background3.png';
import dirtCircle from '@assets/dirt-circle.png';



const tablet = '768'
const smallDesktop = '1024';
const desktop = '1280';
const laptopHeight = '800';
const desktopHeight = '900';


const underTabletBreakpoint = `@media all and (max-width: ${tablet - 1}px)`;
const tabletBreakpoint = `@media all and (min-width: ${tablet}px)`;
const tabletAndSmallDesktopBreakpoint = `@media all and (min-width: ${tablet}px) and (max-width: ${smallDesktop - 1}px)`;
const smallDesktopBreakpoint = `@media all and (min-width: ${smallDesktop}px)`;

export default createGlobalStyle`
	body {
 		font-family: rubik, helvetica, arial, sans-serif;
	}

	a:link,
	a:visited {
		color: #51d994;
		text-decoration: none;
		transition: color 0.4s ease-out;
	}

	.tile-background {
		margin: 0 auto;
		width: 100%;
    	min-height: 100vh;		
		background-image url(${tileBackground});
		background-repeat: repeat;
		background-position: 50% 0%;
	}

	.game-video-number {
	    font-family: 'Old Standard TT', 'times new roman',serif;
	}

	.mountain-background {
		position: relative;
		min-height: 100vh;
		background-image url(${mountainBackground});
		background-position: 50% 25%;
		z-index: 2;

		${smallDesktopBreakpoint} {
			background-position: 50% 25%;
			background-repeat: no-repeat
		}
	}

	.intro-logo {
		width: 200px;
	}

	.game-logo {
 		width: 90px;
 		z-index: 1;
	}

	.start-game {
		background-color: #51d994;
		border: 3px solid #000;
		border-radius: 5px;
		box-shadow: 0px 0px 5px 2px transparent;
		
		cursor: pointer;
		transition: background-color 0.4s ease-out, color 0.4s ease-out, border 0.4s ease-out, box-shadow 0.4s ease-out;

		&:hover {
			background-color: #06d26a;
			box-shadow: 0px 0px 5px 2px #fff5d1;
		}
	}

	.about-author {
		position: absolute;
		right: 30px;
		bottom: 30px;
    	background-color: #51d994;
		border: 3px solid #000;
		border-radius: 5px;
		box-shadow: 0px 0px 5px 2px transparent;
		cursor: pointer;
		transition: background-color 0.4s ease-out, color 0.4s ease-out, border 0.4s ease-out, box-shadow 0.4s ease-out;

		&:hover {
			background-color: #06d26a;
			box-shadow: 0px 0px 5px 2px #fff5d1;
		}

		${underTabletBreakpoint} {
			position: relative;
			right: initial;
			bottom: initial;
		}
	}

	.answer-container {
		display: flex;
		flex-wrap: wrap;
		position: fixed;
		width: 100%;
		bottom: 0;
		padding: 20px;
		background: rgba(0,0,0,.7);
		z-index: 10;

		${smallDesktopBreakpoint} {
		    width: 210px;
		    position: absolute;
		    top: 30px;
		    left: 30px;
		    bottom: initial;
		    padding: 0;
		    background: transparent;
		}
	}

	.answer {
		width: 50%;
    	height: 40px;
    	border: 3px solid #000;

    	${smallDesktopBreakpoint} {
    		width: 100%;
    	}
    }

    .skip-button {
    	display: block;
    	width: 50%;
    	height: 40px;
    	background-color: #51d994;
		border: 3px solid #000;
		border-radius: 5px;
		box-shadow: 0px 0px 5px 2px transparent;
		cursor: pointer;
		transition: background-color 0.4s ease-out, color 0.4s ease-out, border 0.4s ease-out, box-shadow 0.4s ease-out;

		&:hover {
			background-color: #06d26a;
			box-shadow: 0px 0px 5px 2px #fff5d1;
		}

		${smallDesktopBreakpoint} {
			margin-top: 5px;
			width: 100%;
			height: 30px;
		}
    }

    .timer {
    	display: block;
    	color: #fff;
    	font-size: 16px;
    	text-shadow: 1px 1px #000;
    	text-align: left;

    	${smallDesktopBreakpoint} {
    		font-size: 30px;
    	}
  	}

	#video-1 {
		z-index: 9
	}

	#video-2 {
		z-index: 8
	}

	#video-3 {
		z-index: 7
	}
	
	#video-4 {
		z-index: 6
	}

	#video-5 {
		z-index: 5
	}
	
	#video-6 {
		z-index: 4
	}
	
	#video-7 {
		z-index: 3
	}

	#video-8 {
		z-index: 2
	}

	#video-9 {
		z-index: 1
	}

	@media all and (max-width: ${tablet - 1}px) {
		#video-1 {
			z-index: 1
		}

		#video-2 {
			z-index: 2
		}

		#video-3 {
			z-index: 3
		}
		
		#video-4 {
			z-index: 4
		}

		#video-5 {
			z-index: 5
		}
		
		#video-6 {
			z-index: 6
		}
		
		#video-7 {
			z-index: 7
		}

		#video-8 {
			z-index: 8
		}

		#video-9 {
			z-index: 9
		}		
	}

	// Work on video background image element
	// .video-background::after {
	// 	content: "";
	// 	display: block;
	// 	position: absolute;
	// 	top: 0;
	// 	margin-left: -10%;
	// 	margin-top: -10%;
	// 	width: 120%;
	// 	height: 120%;
	// 	background-image: url(${dirtCircle});
	// 	background-repeat: no-repeat;
	// 	background-position: 50% 50%;
	// 	opacity: .7;
	// 	z-index: -1;
	// }

	@media all and (max-width: ${tablet - 1}px) {
		#video-1 {
			order: 4;
		}

		#video-2,
		#video-5 {
			order: 3;
		}

		#video-3,
		#video-6,
		#video-8 {
			order: 2;
		}

		#video-4,
		#video-7,
		#video-9 {
			order: 1;	
		}
	}
	
	.game-video-container {
	    width: 100%;


		display: flex;
	  	position: relative;
	  	margin: 0 auto;
	    width: 100%;
		justify-content: center;

    	${smallDesktopBreakpoint} {
    		margin: initial;
    		width: 210px;
    		height: 199px;
    	}

    	@media all and (min-width: ${smallDesktop}px) and (max-height: ${laptopHeight - 1}px) {
    		width: 140px;
    		height: 133px;
    	}
	}

	.game-video-number {
	    position: absolute;
	    right: -30px;
		bottom: 10px;
	    color: #fff;
	    font-family: 'Old Standard TT', 'times new roman',serif;
	    font-size: 80px;
	    font-weight: bold;
	    text-shadow: 2px 2px black;
	    z-index: 2;

	    @media all and (min-width: ${smallDesktop}px) and (max-height: ${laptopHeight - 1}px) {
	    	// right: -20px;
	    	font-size: 50px;
	    }
	}

	.game-video-placeholder {
		object-fit: cover;
	}

	.game-video {
		width: 210px;
    	
  		padding: 15px 15px 20px 15px;
    	background: rgb(2,0,36);
		background: linear-gradient(
			90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 35%, rgba(97,97,97,1) 100%);
		border-color: #333333;
		border-radius: 10px;
		border-style: solid;
		border-width: 3;
		cursor: pointer;

		@media all and (min-width: ${smallDesktop}px) and (max-height: ${laptopHeight - 1}px) {
    		padding: 10px 10px 10px 10px;
    		width: 140px;
    		// height: 133px;
    	}

		@media all and (min-width: ${tabletBreakpoint}px) and (max-width: ${smallDesktopBreakpoint - 1}px) {
			padding: 10px;
		}

		@media all and (max-width: ${smallDesktop - 1}px) {
			padding: 15px 15px 20px 15px;
		}
	}

	.game-video-1 {
	  	transform: rotate(-5deg);
		order: 4;

	  	@media all and (min-width: ${tabletBreakpoint}px) {
			order: 1;
		}
	}

	.game-video-2 {
	  transform: rotate(7deg);
	}

	.game-video-3 {
	  transform: rotate(-90deg);

	  	.game-video-number {
			transform: rotate(90deg);
			bottom: -60px;
			left: 30px;
			right: initial;
		}
	}

	.game-video-4 {
	  	transform: rotate(7deg);
	}

	.game-video-5 {
	  	transform: rotate(-8deg);
	}

	.game-video-6 {
	  	transform: rotate(3deg);
	}

	.game-video-7 {
	  	transform: rotate(50deg);
	}

	.game-video-8 {
		transform: rotate(7deg);
	}

	.game-video-9 {
		transform: rotate(180deg);
	  
	 	.game-video-number {
			transform: rotate(-180deg);
			right: initial;
			left: -30px;
			bottom: 90px;
		}
	}

	.youtube-wrapper {
		opacity: 0;
	}

	.frame-wrapper {
	   overflow: hidden;
	   max-width: 100%;
	   border-radius: 10px;
	}

	.frame-container {
	    position: relative;
	    padding-bottom: 75%; /* 4:3 */  
	    padding-top: 25px;
	    width: 1000%; /* enlarge beyond browser width */
	    left: -500%; /* center */
	}

	.frame-container iframe {
	    position: absolute; 
	    top: 0; 
	    left: 0; 
	    width: 100%; 
	    height: 100%;
	}

	iframe {
		width: 100%;
		height: 100%;
		border-radius: 10px;
		pointer-events:none;
	}

	.animated-link {
		display: inline-block;
		position: relative;
		padding: 0.2em 0;
	}

	.animated-link::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 0.1em;
		background-color: #51d994;
		opacity: 0;
		transition: opacity 300ms, transform 300ms;
	}

	.animated-link:hover::after,
	.animated-link:focus::after {
		opacity: 1;
		transform: translate3d(0, 0.2em, 0);
	}

	/* Slide in */
	p .animated-link {
		overflow: hidden;
	}

	p .animated-link::after {
	    opacity 1;
	    transform: translate3d(-100%, 0, 0);
	}

	.animated-link:hover::after,
	.animated-link:focus::after{
		transform: translate3d(0, 0, 0);
	}

	.u-game-window-background {
		background-color: rgba(0,0,0,0.7);
		border: 5px solid #e2aa90;
    	box-shadow: 0px 2px 7px black;
	}

	.u-text-shadow {
		text-shadow: 2px 2px black;
	}

	.u-text-shadow-thin {
		text-shadow: 1px 1px #000;
	}

	.u-cursor-pointer {
		cursor: pointer;
	}

	.youtube-wrapper {
		opacity: 0;
	}

	.frame-wrapper {
	   overflow: hidden;
	   max-width: 100%;
	   border-radius: 10px;
	}

	.frame-container {
	    position: relative;
	    padding-bottom: 75%; /* 4:3 */  
	    padding-top: 25px;
	    width: 900%; /* enlarge beyond browser width */
	    left: -400%; /* center */
	}

	.frame-container iframe {
	    position: absolute; 
	    top: 0; 
	    left: 0; 
	    width: 100%; 
	    height: 100%;
	}

	iframe {
		width: 100%;
		height: 100%;
		border-radius: 10px;
		pointer-events:none;
	}

	// Hide Video speed controls
	.vsc-controller {
		display: none;
	}

	.a-warning-flash {
		animation-duration: 2s;
		animation-name: warning;
		animation-iteration-count: infinite;
	}

	@keyframes warning {
		0% {
		    color: white;
		}

	  	50% {
		    color: #ff6666;
	  	}

	  	100% {
		    color: white;
	  	}
	}
`;

// 	/* ==========================================================================
// 	   Custom Styles
// 	   ========================================================================== */

// 	.tile-background {
// 		margin: 0 auto;
// 		width: 100%;
//     	min-height: 100vh;		
// 		background-image url(${tileBackground});
// 		background-repeat: repeat;
// 		background-position: 50% 0%;
// 	}

// 	.mountain-background {
// 		position: relative;
// 		min-height: 100vh;
// 		background-image url(${mountainBackground});
// 		background-position: 50% 0px;
// 		z-index: 2;

// 		${smallDesktopBreakpoint} {
// 			background-position: 50% -140px;
// 		}
// 	}

// 	.themesong-container {
// 		display: flex;
// 		justify-content: space-around;
// 		margin: 20px auto 0;
// 		max-width: 540px;
// 	}

// 	audio {
//     	height: 40px;
// 	}

// 	.start-game {
// 		display: block;
// 		margin-left: auto;
// 		margin-right: auto;
// 		width: 200px;
// 		height: 50px;
// 		color: #000;
// 		background-color: #51d994;
// 		border: 3px solid #000;
// 		border-radius: 5px;
// 		box-shadow: 0px 0px 5px 2px transparent;
// 		font-size: 16px;
// 		cursor: pointer;
// 		transition: background-color 0.4s ease-out, color 0.4s ease-out, border 0.4s ease-out, box-shadow 0.4s ease-out;

// 		&:hover {
// 			color: #fff;
// 			background-color: #06d26a;
// 			border: 3px solid #fff;
// 			box-shadow: 0px 0px 5px 2px #E8AE00;
// 		}
// 	}

// 	.game-container {
// 	  display: block;
// 	  margin: 0 auto;
// 	  padding-bottom: 120px;
// 	  width: 100%;
// 	  max-width: 100%;  

// 	  ${smallDesktopBreakpoint} {
// 		min-width: 1000px;
// 	  	max-width: 1500px;
// 	  	padding-bottom: 0;
// 	  }
// 	}

// 	.game-row {
// 		display: flex;
//     	flex-wrap: wrap;
// 	  	margin: 0 auto;
// 	  	height: auto;

// 	  	${smallDesktopBreakpoint} {
// 	  		flex-wrap: initial;
// 		  	justify-content: space-around;
// 		  	position: relative;
// 		  	left: 40px;
// 		  	height: 230px;
// 	  	}

// 	  	@media all and (min-width: ${smallDesktop}px) and (max-height: ${laptopHeight - 1}px) {
// 			height: 170px;
// 		}
// 	}

// 	.game-row-1 {
// 		width: 100%;
	  
// 		${tabletBreakpoint} {
// 			width: 400px;
// 		}

// 		${smallDesktopBreakpoint} {
// 			width: 500px;
// 		}

// 		@media all and (min-width: ${smallDesktop}px) and (max-height: ${laptopHeight - 1}px) {
// 			width: 400px;
// 		}
// 	}

// 	.game-row-2 {
// 	  	width: 100%;

// 		${tabletBreakpoint} {
// 			width: 600px;
// 		}

// 	  	${smallDesktopBreakpoint} {
// 	  		left: 80px;
// 	  		width: 800px;
// 	  	}

// 	  	@media all and (min-width: ${smallDesktop}px) and (max-height: ${laptopHeight - 1}px) {
// 			width: 600px;
// 		}

// 		@media all and (min-width: ${smallDesktop}px) and (min-height: ${desktopHeight}px) {
// 		    margin-top: 10px;
//     		margin-bottom: 30px;
//     	}
// 	}

// 	.game-row-3 {
// 	  	width: 100%;

// 	  	${tabletBreakpoint} {
// 			width: 800px;
// 		}

// 	  	${smallDesktopBreakpoint} {
// 	  		width: 1000px;
// 	  	}

// 	  	@media all and (min-width: ${smallDesktop}px) and (max-height: ${laptopHeight - 1}px) {
// 			width: 800px;
// 		}
// 	}

// 	@media all and (max-width: ${smallDesktop - 1}px) {
// 		#video-1 {
// 			order: 4;
// 		}

// 		#video-2,
// 		#video-5 {
// 			order: 3;
// 		}

// 		#video-3,
// 		#video-6,
// 		#video-8 {
// 			order: 2;
// 		}

// 		#video-4,
// 		#video-7,
// 		#video-9 {
// 			order: 1;	
// 		}
// 	}

// 	.game-video-container {
// 	  	display: flex;
// 	  	position: relative;
// 	  	margin: 0 auto;
// 	    width: 100%;
// 		justify-content: center;

//     	${smallDesktopBreakpoint} {
//     		margin: initial;
//     		width: 210px;
//     		height: 199px;
//     	}

//     	@media all and (min-width: ${smallDesktop}px) and (max-height: ${laptopHeight - 1}px) {
//     		width: 140px;
//     		height: 133px;
//     	}
// 	}

// 	.game-video-number {
// 	    position: absolute;
// 	    right: -30px;
// 	    color: #fff;
// 	    font-family: 'Old Standard TT', 'times new roman',serif;
// 	    font-size: 80px;
// 	    font-weight: bold;
// 	    text-shadow: 2px 2px black;
// 	    z-index: 2;	   

// 	    @media all and (min-width: ${smallDesktop}px) and (max-height: ${laptopHeight - 1}px) {
// 	    	right: -20px;
// 	    	font-size: 50px;
// 	    }
// 	}

// 	.game-video-placeholder {
// 		object-fit: cover;
// 		border-radius: 10px;
// 	}

// 	.game-video {
// 		width: 210px;
//     	height: 199px;
//   		padding: 15px 15px 20px 15px;
//     	background: rgb(2,0,36);
// 		background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 35%, rgba(97,97,97,1) 100%);
// 		border-radius: 10px;
// 		cursor: pointer;

// 		@media all and (min-width: ${smallDesktop}px) and (max-height: ${laptopHeight - 1}px) {
//     		padding: 10px 10px 10px 10px;
//     		width: 140px;
//     		height: 133px;
//     	}
// 	}

// 	.win-screen,
// 	.lose-screen {
// 		margin-left: auto;
// 		margin-right: auto;
// 		padding: 0 20px;
// 		color: white;
// 		font-size: 36px;
// 		text-shadow: 2px 2px #000;
// 	}

// 	.lose-screen {
// 		max-width:500px;
// 	}

// 	.win-video {
// 		display: block;
// 	    margin: 0 auto;
// 	  	width: 100%;

// 	  	${smallDesktopBreakpoint} {
// 	  		width: 470px;
// 	  	}
// 	}

// 	.win-video-container {
// 		margin: 0 auto;
// 		width: 100%;

// 		${smallDesktopBreakpoint} {
// 			width: 700px;
// 		}
// 	}

// 	.win-video-info {
// 		display: flex;
// 		flex-direction: row;
//   		flex-wrap: wrap;
//   		justify-content: flex-start;
// 		margin: 0 auto;
// 		width: 100%;
// 		background-color: rgba(0,0,0,0.7);\

// 		${smallDesktopBreakpoint} {
// 			width: 700px;
// 		}
// 	}

// 	.win-video-info p {
// 		display: block;
// 		flex-direction: column;
// 		width: 100%;
// 		margin: 3px 0;
// 		font-size: 14px;
// 		text-align: left;

// 		${smallDesktopBreakpoint} {
// 			width: 50%;
// 		}
// 	}
