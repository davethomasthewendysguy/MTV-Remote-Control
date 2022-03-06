**Getting started:**

Run npm install from the root directory to get the necessary node modules.

`npm run start` will spin up a local instance in your browser at `localhost:8080`.

`npm run build` will build a production version.



v0.1 - Basic design scaffolding in place.

v0.3 - Added test videos.

v0.4 - A working version with hardcoded songs.

v0.5 - A small set of songs objects has been added into a JSON file and picked out randomly on each play. Offset start times added for songs with long intros or where the band name is prominently displayed.

v0.55 -
	- More songs added
	- Google Analytics tracking
	- Proper parsing of escape characters for artist and song
	- Prevented videos from the same artist appearing twice
	- An updated Win Screen with your game videos

v0.6 -
	- Added alternate spellings for some artists
	- More songs added
	- Tweaked offsets for some songs so the beat or lyrics start when played
	- Album and release year added to win and lose screens

v0.7 -
	- Major UI refactor
	- More songs added (345 total)
	- Implemented Reset Game button
	- Implemented a click to reveal info for missed answers

v0.75 -
	- Fixed issue with duplicate videos from the same artist appearing in a single game
	- More songs added (497 total)

v0.76 - Now next video shown will be the next in order after the last guessed instead of the lowest non-guessed video index. Will loop around to beginning if need be.

v0.77 - About screen added.

v.0.78 - More songs added (551 total) and fixed alignment of about us screen.

v0.8 - Rework to embeds to use YouTube API instead of Iframe element.
