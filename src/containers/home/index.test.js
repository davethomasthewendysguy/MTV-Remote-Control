// eslint-disable-next-line no-unused-vars
import React from 'react';
import renderer from 'react-test-renderer';

import HomePage, { isAnswerCorrect } from '.';

describe('HomePage component', () => {
	it('should render successfully', () => {
		const tree = renderer.create(<HomePage counter={{ count: 0 }} dispatch={() => ({})} />).toJSON();

		expect(tree).toMatchSnapshot();
	});
});


test('AC/DC', () => {
	expect(isAnswerCorrect('AC/DC', 'AC/DC')).toBe(true);
	expect(isAnswerCorrect('acdc', 'AC/DC')).toBe(true);
	expect(isAnswerCorrect('ac/dc', 'AC/DC')).toBe(true);
	expect(isAnswerCorrect('AC/dc', 'AC/DC')).toBe(true);
	expect(isAnswerCorrect('ac-dc', 'AC/DC')).toBe(true);
	expect(isAnswerCorrect('ac', 'AC/DC')).toBe(false);
	expect(isAnswerCorrect('dcac', 'AC/DC')).toBe(false);
});

test('A-ha', () => {
	expect(isAnswerCorrect('A-ha', 'A-ha')).toBe(true);
	expect(isAnswerCorrect('Aha', 'A-ha')).toBe(true);
	expect(isAnswerCorrect('A ha', 'A-ha')).toBe(true);
});

test('The Alan Parsons Project', () => {
	expect(isAnswerCorrect('The Alan Parsons Project', 'The Alan Parsons Project')).toBe(true);
	expect(isAnswerCorrect('Alan Parsons Project', 'The Alan Parsons Project')).toBe(true);
});

test('Bruce Hornsby And The Range', () => {
	expect(isAnswerCorrect('Bruce Hornsby And The Range', 'Bruce Hornsby And The Range')).toBe(true);
	expect(isAnswerCorrect('Bruce Hornsby & The Range', 'Bruce Hornsby And The Range')).toBe(true);
	expect(isAnswerCorrect('Bruce Hornsby', 'Bruce Hornsby And The Range')).toBe(true);
});

test('The B-52s', () => {
	expect(isAnswerCorrect('The B-52s', 'The B-52s')).toBe(true);
	expect(isAnswerCorrect('B-52s', 'The B-52s')).toBe(true);
	expect(isAnswerCorrect('B52s', 'The B-52s')).toBe(true);
});

test('David Bowie And Mick Jagger', () => {
	expect(isAnswerCorrect('David Bowie And Mick Jagger', 'David Bowie And Mick Jagger')).toBe(true);
	expect(isAnswerCorrect('David Bowie & Mick Jagger', 'David Bowie And Mick Jagger')).toBe(true);
});

test('DJ Jazzy Jeff And The Fresh Prince', () => {
	expect(isAnswerCorrect('DJ Jazzy Jeff And The Fresh Prince', 'DJ Jazzy Jeff And The Fresh Prince')).toBe(true);
	expect(isAnswerCorrect('DJ Jazzy Jeff & The Fresh Prince', 'DJ Jazzy Jeff And The Fresh Prince')).toBe(true);
});

test('Doug E. Fresh And The Get Fresh Crew', () => {
	expect(isAnswerCorrect('Doug E. Fresh', 'Doug E. Fresh And The Get Fresh Crew')).toBe(true);
	expect(isAnswerCorrect('Doug E Fresh', 'Doug E. Fresh And The Get Fresh Crew')).toBe(true);
});

test('The Dream Academy', () => {
	expect(isAnswerCorrect('The Dream Academy', 'The Dream Academy')).toBe(true);
	expect(isAnswerCorrect('Dream Academy', 'The Dream Academy')).toBe(true);
});

test('Echo And The Bunnymen', () => {
	expect(isAnswerCorrect('Echo And The Bunnymen', 'Echo And The Bunnymen')).toBe(true);
	expect(isAnswerCorrect('Echo & The Bunnymen', 'Echo And The Bunnymen')).toBe(true);
});

test('Exposé', () => {
	expect(isAnswerCorrect('Exposé', 'Exposé')).toBe(true);
	expect(isAnswerCorrect('Expose', 'Exposé')).toBe(true);
});

test('The Go-Go\'s', () => {
	expect(isAnswerCorrect('The Go-Go\'s', 'The Go-Go\'s')).toBe(true);
	expect(isAnswerCorrect('The Go-Gos', 'The Go-Go\'s')).toBe(true);
	expect(isAnswerCorrect('The GoGo\'s', 'The Go-Go\'s')).toBe(true);
	expect(isAnswerCorrect('The GoGos', 'The Go-Go\'s')).toBe(true);
});

test('Guns N\' Roses', () => {
	expect(isAnswerCorrect('Guns N\' Roses', 'Guns N\' Roses')).toBe(true);
	expect(isAnswerCorrect('Guns N Roses', 'Guns N\' Roses')).toBe(true);
	expect(isAnswerCorrect('Guns \'N Roses', 'Guns N\' Roses')).toBe(true);
	expect(isAnswerCorrect('Guns and Roses', 'Guns N\' Roses')).toBe(true);
});

test('Hall and Oates', () => {
	expect(isAnswerCorrect('Hall and Oates', 'Hall and Oates')).toBe(true);
	expect(isAnswerCorrect('Hall & Oates', 'Hall and Oates')).toBe(true);
});

test('John Mellencamp', () => {
	expect(isAnswerCorrect('John Mellencamp', 'John Mellencamp', 'John Cougar Mellencamp')).toBe(true);
	expect(isAnswerCorrect('John Cougar Mellencamp', 'John Mellencamp', 'John Cougar Mellencamp')).toBe(true);
});

test('J. Geils Band', () => {
	expect(isAnswerCorrect('J. Geils Band', 'J. Geils Band')).toBe(true);
	expect(isAnswerCorrect('J Geils Band', 'J. Geils Band')).toBe(true);
});

test('Michael Jackson', () => {
	expect(isAnswerCorrect('King Of Pop', 'Michael Jackson', 'the king of pop')).toBe(true);
	expect(isAnswerCorrect('The King of Pop', 'Michael Jackson', 'the king of pop')).toBe(true);
});

test('Mike And The Mechanics', () => {
	expect(isAnswerCorrect('Mike And The Mechanics', 'Mike And The Mechanics')).toBe(true);
	expect(isAnswerCorrect('Mike & The Mechanics', 'Mike And The Mechanics')).toBe(true);
});

test('Mötley Crüe', () => {
	expect(isAnswerCorrect('Mötley Crüe', 'Mötley Crüe')).toBe(true);
	expect(isAnswerCorrect('Mötley Crue', 'Mötley Crüe')).toBe(true);
	expect(isAnswerCorrect('Motley Crüe', 'Mötley Crüe')).toBe(true);
	expect(isAnswerCorrect('Motley Crue', 'Mötley Crüe')).toBe(true);
	expect(isAnswerCorrect('Motley Crew', 'Mötley Crüe')).toBe(true);
});

test('Mr. Mister', () => {
	expect(isAnswerCorrect('Mr. Mister', 'Mr. Mister', 'mister mister', 'mr. mr.')).toBe(true);
	expect(isAnswerCorrect('Mr Mister', 'Mr. Mister', 'mister mister', 'mr. mr.')).toBe(true);
	expect(isAnswerCorrect('Mister Mister', 'Mr. Mister', 'mister mister', 'mr. mr.')).toBe(true);
	expect(isAnswerCorrect('Mr Mr', 'Mr. Mister', 'mister mister', 'mr. mr.')).toBe(true);
});

test('Orchestral Manoeuvers In The Dark', () => {
	expect(isAnswerCorrect('Orchestral Manoeuvers In The Dark', 'Orchestral Manoeuvers In The Dark', 'OMD')).toBe(true);
	expect(isAnswerCorrect('Orchestral Maneuvers In The Dark', 'Orchestral Manoeuvers In The Dark', 'OMD')).toBe(true);
	expect(isAnswerCorrect('OMD', 'Orchestral Manoeuvers In The Dark', 'OMD')).toBe(true);
});

test('The Outfield', () => {
	expect(isAnswerCorrect('The Outfield', 'The Outfield')).toBe(true);
	expect(isAnswerCorrect('outfield', 'The Outfield')).toBe(true);
});

test('Peter Gabriel And Kate Bush', () => {
	expect(isAnswerCorrect('Peter Gabriel And Kate Bush', 'Peter Gabriel And Kate Bush')).toBe(true);
	expect(isAnswerCorrect('Peter Gabriel & Kate Bush', 'Peter Gabriel And Kate Bush')).toBe(true);
	expect(isAnswerCorrect('Peter Gabriel With Kate Bush', 'Peter Gabriel And Kate Bush')).toBe(true);
});

test('Ray Parker Jr.', () => {
	expect(isAnswerCorrect('Ray Parker Jr.', 'Ray Parker Jr.')).toBe(true);
	expect(isAnswerCorrect('Ray Parker Jr', 'Ray Parker Jr.')).toBe(true);
});

test('R.E.M.', () => {
	expect(isAnswerCorrect('R.E.M.', 'R.E.M.')).toBe(true);
	expect(isAnswerCorrect('REM', 'R.E.M.')).toBe(true);
});

test('RUN-DMC And Aerosmith', () => {
	expect(isAnswerCorrect('RUN-DMC And Aerosmith', 'RUN-DMC And Aerosmith')).toBe(true);
	expect(isAnswerCorrect('RUN-DMC Aerosmith', 'RUN-DMC And Aerosmith')).toBe(true);
	expect(isAnswerCorrect('RUN-DMC with Aerosmith', 'RUN-DMC And Aerosmith')).toBe(true);
});

test('Siouxsie And The Banshees', () => {
	expect(isAnswerCorrect('Siouxsie And The Banshees', 'Siouxsie And The Banshees', 'Siouxsie Sioux And The Banshees')).toBe(true);
	expect(isAnswerCorrect('Siouxsie Sioux And The Banshees', 'Siouxsie And The Banshees', 'Siouxsie Sioux And The Banshees')).toBe(true);
});

test('T\'Pau', () => {
	expect(isAnswerCorrect('T\'Pau', 'T\'Pau')).toBe(true);
	expect(isAnswerCorrect('Tpau', 'T\'Pau')).toBe(true);
	expect(isAnswerCorrect('T-Pau', 'T\'Pau')).toBe(true);
});

test('Wham!', () => {
	expect(isAnswerCorrect('Wham!', 'Wham!')).toBe(true);
	expect(isAnswerCorrect('Wham', 'Wham!')).toBe(true);
});

test('Yazoo', () => {
	expect(isAnswerCorrect('Yazoo', 'Yazoo', 'Yaz')).toBe(true);
	expect(isAnswerCorrect('Yaz', 'Yazoo', 'Yaz')).toBe(true);
});

test('.38 Special', () => {
	expect(isAnswerCorrect('.38 Special', '.38 Special', '38 Special')).toBe(true);
	expect(isAnswerCorrect('38 Special', '.38 Special', '38 Special')).toBe(true);
});