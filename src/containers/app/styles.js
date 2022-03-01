import { createGlobalStyle } from 'styled-components';
import tileBackground from '@assets/tile-background.jpg';
import mountainBackground from '@assets/game-background.png';

const tablet = '768'
const smallDesktop = '1024';
const desktop = '1280';
const laptopHeight = '800';


const tabletBreakpoint = `@media all and (min-width: ${tablet}px)`;
const tabletAndSmallDesktopBreakpoint = `@media all and (min-width: ${tablet}px) and (max-width: ${smallDesktop - 1}px)`;
const smallDesktopBreakpoint = `@media all and (min-width: ${smallDesktop}px)`;

export default createGlobalStyle`
	img {
		max-width: 100%;
		height: auto;
		display: inline-block;
		vertical-align: middle;
	}

	* {
		box-sizing: border-box;
	}

	/* ==========================================================================
   Base styles: opinionated defaults
   ========================================================================== */

	html {
	  color: #222;
	  font-size: 1em;
	  line-height: 1.4;
	}

	/*
	 * Remove text-shadow in selection highlight:
	 * https://twitter.com/miketaylr/status/12228805301
	 *
	 * Vendor-prefixed and regular ::selection selectors cannot be combined:
	 * https://stackoverflow.com/a/16982510/7133471
	 *
	 * Customize the background color to match your design.
	 */

	::-moz-selection {
	  background: #b3d4fc;
	  text-shadow: none;
	}

	::selection {
	  background: #b3d4fc;
	  text-shadow: none;
	}

	/*
	 * A better looking default horizontal rule
	 */

	hr {
	  display: block;
	  height: 1px;
	  border: 0;
	  border-top: 1px solid #ccc;
	  margin: 1em 0;
	  padding: 0;
	}

	/*
	 * Remove the gap between audio, canvas, iframes,
	 * images, videos and the bottom of their containers:
	 * https://github.com/h5bp/html5-boilerplate/issues/440
	 */

	audio,
	canvas,
	iframe,
	img,
	svg,
	video {
	  vertical-align: middle;
	}

	/*
	 * Remove default fieldset styles.
	 */

	fieldset {
	  border: 0;
	  margin: 0;
	  padding: 0;
	}

	/*
	 * Allow only vertical resizing of textareas.
	 */

	textarea {
	  resize: vertical;
	}

	/* ==========================================================================
	   Author's custom styles
	   ========================================================================== */

	/* ==========================================================================
	   Helper classes
	   ========================================================================== */

	/*
	 * Hide visually and from screen readers
	 */

	.hidden,
	[hidden] {
	  display: none !important;
	}

	/*
	 * Hide only visually, but have it available for screen readers:
	 * https://snook.ca/archives/html_and_css/hiding-content-for-accessibility
	 *
	 * 1. For long content, line feeds are not interpreted as spaces and small width
	 *    causes content to wrap 1 word per line:
	 *    https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe
	 */

	.sr-only {
	  border: 0;
	  clip: rect(0, 0, 0, 0);
	  height: 1px;
	  margin: -1px;
	  overflow: hidden;
	  padding: 0;
	  position: absolute;
	  white-space: nowrap;
	  width: 1px;
	  /* 1 */
	}

	/*
	 * Extends the .sr-only class to allow the element
	 * to be focusable when navigated to via the keyboard:
	 * https://www.drupal.org/node/897638
	 */

	.sr-only.focusable:active,
	.sr-only.focusable:focus {
	  clip: auto;
	  height: auto;
	  margin: 0;
	  overflow: visible;
	  position: static;
	  white-space: inherit;
	  width: auto;
	}

	/*
	 * Hide visually and from screen readers, but maintain layout
	 */

	.invisible {
	  visibility: hidden;
	}

	/*
	 * Clearfix: contain floats
	 *
	 * For modern browsers
	 * 1. The space content is one way to avoid an Opera bug when the
	 *    'contenteditable' attribute is included anywhere else in the document.
	 *    Otherwise it causes space to appear at the top and bottom of elements
	 *    that receive the 'clearfix' class.
	 * 2. The use of 'table' rather than 'block' is only necessary if using
	 *    ':before' to contain the top-margins of child elements.
	 */

	.clearfix::before,
	.clearfix::after {
	  content: " ";
	  display: table;
	}

	.clearfix::after {
	  clear: both;
	}

	/* ==========================================================================
	   EXAMPLE Media Queries for Responsive Design.
	   These examples override the primary ('mobile first') styles.
	   Modify as content requires.
	   ========================================================================== */

	@media only screen and (min-width: 35em) {
	  /* Style adjustments for viewports that meet the condition */
	}

	@media print,
	  (-webkit-min-device-pixel-ratio: 1.25),
	  (min-resolution: 1.25dppx),
	  (min-resolution: 120dpi) {
	  /* Style adjustments for high resolution devices */
	}

	/* ==========================================================================
	   Print styles.
	   Inlined to avoid the additional HTTP request:
	   https://www.phpied.com/delay-loading-your-print-css/
	   ========================================================================== */

	@media print {
	  *,
	  *::before,
	  *::after {
	    background: #fff !important;
	    color: #000 !important;
	    /* Black prints faster */
	    box-shadow: none !important;
	    text-shadow: none !important;
	  }

	  a,
	  a:visited {
	    text-decoration: underline;
	  }

	  a[href]::after {
	    content: " (" attr(href) ")";
	  }

	  abbr[title]::after {
	    content: " (" attr(title) ")";
	  }

	  /*
	   * Don't show links that are fragment identifiers,
	   * or use the 'javascript:' pseudo protocol
	   */
	  a[href^="#"]::after,
	  a[href^="javascript:"]::after {
	    content: "";
	  }

	  pre {
	    white-space: pre-wrap !important;
	  }

	  pre,
	  blockquote {
	    border: 1px solid #999;
	    page-break-inside: avoid;
	  }

	  /*
	   * Printing Tables:
	   * https://web.archive.org/web/20180815150934/http://css-discuss.incutio.com/wiki/Printing_Tables
	   */
	  thead {
	    display: table-header-group;
	  }

	  tr,
	  img {
	    page-break-inside: avoid;
	  }

	  p,
	  h2,
	  h3 {
	    orphans: 3;
	    widows: 3;
	  }

	  h2,
	  h3 {
	    page-break-after: avoid;
	  }
	}

	/* ==========================================================================
	   Custom Styles
	   ========================================================================== */

	.tile-background {
		margin: 0 auto;
		width: 100%;
    	min-height: 100vh;		
		background-image url(${tileBackground});
		background-repeat: repeat;
		background-position: 50% 0%;
	}

	.mountain-background {
		position: relative;
		min-height: 100vh;
		background-image url(${mountainBackground});
		background-position: 50% 0px;
		z-index: 2;

		${smallDesktopBreakpoint} {
			background-position: 50% -140px;
		}
	}

	.h1 {
		color: #fff;
		font-size: 20px;
		text-shadow: 2px 2px black;

		@media all and (min-width: ${smallDesktop}px) and (min-height: ${laptopHeight}px) {
			font-size: 30px;
		}
	}

	.intro-logo {
		display: block;
		margin: 0 auto;
		width: 130px;
		height: auto;

		${smallDesktopBreakpoint} {
			width: 200px;
		}

		@media all and (max-height: ${laptopHeight - 1}px) {
			width: 130px;
		}
	}

	.game-logo {
		display: block;
		position: absolute;
		top: 20px;
		right: 20px;
		width: 90px;
		height: auto;
		z-index: 1;

		@media all and (min-width: ${smallDesktop}px) and (min-height: ${laptopHeight}px) {
			top: 30px;
			right: 30px;
			width: 200px;
		}
	}

	.themesong-container {
		display: flex;
		justify-content: space-around;
		margin: 20px auto 0;
		max-width: 540px;
	}

	.play-themsong {
		display: inline-block;
		align-self: center;
		margin: 0 20px 0 0;
		color: #fff;
		font-size: 14px;
		text-shadow: 1px 1px #000;
	}

	audio {
    	height: 40px;
	}

	.game-rules {
		margin: 20px auto 0;
		padding: 20px;
		max-width: 500px;
		color: #fff;
		background-color: rgba(0,0,0,0.7);
		font-size: 14px;

		@media all and (min-width: ${smallDesktop}px) and (min-height: ${laptopHeight}px) {
		    font-size: 18px;
		}
	}

	.in-memoriam {
		margin: 20px auto 0;
		width: 250px;
		color: #fff;
		background-color: rgba(0,0,0,0.7);
		font-size: 14px;

		${smallDesktopBreakpoint} {
		    font-size: 18px;
		}	
	}

	.start-game {
		display: block;
		margin-left: auto;
		margin-right: auto;
		width: 200px;
		height: 50px;
		color: #fff;
		background-color: #51d994;
		border: 2px solid #000;
		border-radius: 5px;
		font-size: 16px;
		cursor: pointer;

		&:hover {
			background-color: #06d26a;
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
		z-index: 3;

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
		cursor: pointer;

		&:hover {
			background-color: #06d26a;
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

	.game-container {
	  display: block;
	  margin: 0 auto;
	  padding-bottom: 120px;
	  width: 100%;
	  max-width: 100%;  

	  ${smallDesktopBreakpoint} {
		min-width: 1000px;
	  	max-width: 1500px;
	  	padding-bottom: 0;
	  }
	}

	.game-row {
		display: flex;
    	flex-wrap: wrap;
    	position: relative;
	  	margin: 0 auto;
	  	height: auto;

	  	${smallDesktopBreakpoint} {
	  		flex-wrap: initial;
		  	justify-content: space-around;
		  	left: 40px;
		  	height: 230px;
	  	}

	  	@media all and (min-width: ${smallDesktop}px) and (max-height: ${laptopHeight - 1}px) {
			height: 170px;
		}
	}

	.game-row-1 {
		width: 100%;
	  
		${tabletBreakpoint} {
			width: 400px;
		}

		${smallDesktopBreakpoint} {
			width: 500px;
		}

		@media all and (min-width: ${smallDesktop}px) and (max-height: ${laptopHeight - 1}px) {
			width: 400px;
		}
	}

	.game-row-2 {
	  	width: 100%;

		${tabletBreakpoint} {
			width: 600px;
		}

	  	${smallDesktopBreakpoint} {
	  		left: 80px;
	  		width: 800px;
	  	}

	  	@media all and (min-width: ${smallDesktop}px) and (max-height: ${laptopHeight - 1}px) {
			width: 600px;
		}
	}

	.game-row-3 {
	  	width: 100%;

	  	${tabletBreakpoint} {
			width: 800px;
		}

	  	${smallDesktopBreakpoint} {
	  		width: 1000px;
	  	}

	  	@media all and (min-width: ${smallDesktop}px) and (max-height: ${laptopHeight - 1}px) {
			width: 800px;
		}
	}

	@media all and (max-width: ${smallDesktop - 1}px) {
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
	  	display: flex;
	  	position: relative;
	  	margin: 0 auto;
	    width: 100%;
		justify-content: center;

    	${smallDesktopBreakpoint} {
    		margin: initial;
    		width: 210px;
    		height: 199px;
    		// width: 180px;
    		// height: 161px;
    	}

    	@media all and (min-width: ${smallDesktop}px) and (max-height: ${laptopHeight - 1}px) {
    		width: 140px;
    		height: 133px;
    	}
	}

	.game-video-number {
	    position: absolute;
	    right: -30px;
	    color: #fff;
	    font-family: 'Old Standard TT', 'times new roman',serif;
	    font-size: 80px;
	    font-weight: bold;
	    text-shadow: 2px 2px black;
	    z-index: 2;	   

	    @media all and (min-width: ${smallDesktop}px) and (max-height: ${laptopHeight - 1}px) {
	    	right: -20px;
	    	font-size: 50px;
	    }
	}

	.game-video-placeholder {
		object-fit: cover;
		border-radius: 10px;
	}

	.game-video {
		width: 210px;
    	height: 199px;
  		padding: 15px 15px 20px 15px;
    	background: rgb(2,0,36);
		background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 35%, rgba(97,97,97,1) 100%);
		border-radius: 10px;
		cursor: pointer;

		@media all and (min-width: ${smallDesktop}px) and (max-height: ${laptopHeight - 1}px) {
    		padding: 10px 10px 10px 10px;
    		width: 140px;
    		height: 133px;
    	}
	}

	.game-video-1 {
	  transform: rotate(-5deg);
	}

	.game-video-2 {
	  transform: rotate(7deg);
	}

	.game-video-3 {
	  transform: rotate(-90deg);
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
	}

	@keyframes fadeIn {
		from {
		  opacity: 0;
		}

		90% {
			opacity: 0;
		}
	  
		to {
		  opacity: 1;
		}
	  }

	.youtube-wrapper {
		opacity: 0;

	}
	.youtube-wrapper-played {
		animation-duration: 5s;
		animation-name: fadeIn;
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

	.win-screen,
	.lose-screen {
		margin-left: auto;
		margin-right: auto;
		padding: 0 20px;
		color: white;
		font-size: 36px;
		text-shadow: 2px 2px #000;
	}

	.lose-screen {
		max-width:500px;
	}

	.win-video {
		display: block;
	    margin: 0 auto;
	  	width: 100%;

	  	${smallDesktopBreakpoint} {
	  		width: 470px;
	  	}
	}

	.win-video-container {
		margin: 0 auto;
		width: 100%;

		${smallDesktopBreakpoint} {
			width: 700px;
		}
	}

	.win-video-info {
		display: flex;
		flex-direction: row;
  		flex-wrap: wrap;
  		justify-content: flex-start;
		margin: 0 auto;
		width: 100%;
		background-color: rgba(0,0,0,0.7);\

		${smallDesktopBreakpoint} {
			width: 700px;
		}
	}

	.win-video-info p {
		display: block;
		flex-direction: column;
		width: 100%;
		margin: 3px 0;
		font-size: 14px;
		text-align: left;

		${smallDesktopBreakpoint} {
			width: 50%;
		}
	}

	/* ==========================================================================
	   Type Classes
	   ========================================================================== */

	.type-sans-serif {
		font-family: rubik, helvetica, arial, sans-serif;
	}

	.type-size-med {
		font-size: 20px;
	}

	/* ==========================================================================
	   Color Classes
	   ========================================================================== */
	.color-white {
		color: white;
	}

	.color-red {
		color: red;
	}	

	/* ==========================================================================
	   Animation Classes
	   ========================================================================== */
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

	/* ==========================================================================
	   Utility Classes
	   ========================================================================== */
	.u-inline {
		display: inline;
	}

	.u-margin-top-none {
		margin-top: 0;
	}

	.u-margin-bottom-none {
		margin-bottom: 0;
	}

	.u-margin-top-xs {
		margin-top: 5px;
	}

	.u-margin-top-sm {
		margin-top: 10px;
	}

	.u-margin-top-med {
		margin-top: 20px;
	}

	.u-margin-top-lg {
		margin-top: 40px;
	}

	.u-margin-top-xl {
		margin-top:70px;
	}

	.u-margin-top-xxl {
    	margin-top: 100px;
	}

	.u-margin-left-sm {
		margin-left: 10px;
	}

	.u-margin-bottom-sm {
		margin-bottom: 10px;
	}

	.u-margin-bottom-med {
		margin-bottom: 20px;
	}

	.u-padding-sm {
		padding: 10px;
	}

	.u-padding-top-med {
		padding-top: 20px;
	}

	.u-padding-left-med {
		padding-left: 20px;	
	}

	.u-padding-right-med {
		padding-right: 20px;	
	}

	.u-padding-bottom-med {
		padding-bottom: 20px;
	}

	.u-rounded-corners-sm {
		border-radius: 5px;
	}

	.u-rounded-corners-med {
		border-radius: 10px;
	}

	.u-rounded-corners-lg {
		border-radius: 15px;
	}

	.u-display-flex {
		display: flex
	}

	.u-position-relative {
		position: relative;
	}

	.u-cursor-pointer {
		cursor: pointer;
	}

	.u-text-center {
		text-align: center;
	}
`;
