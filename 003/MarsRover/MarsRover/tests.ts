/// <reference path="app.ts" />
/// <reference path="Defenitions/jasmine.d.ts" />

describe('Mars Rover', () => {

	it('Rover should exist', () => {

		var rover = new Rover({x:0, y:0}, 'N');

	});

	it('Rover should take initial position', () => {

		var position = { x: 0, y: 0 };

		var rover = new Rover(position, 'N');

		expect(rover.position).toBe(position);

	});

	it('Should move north / south when facing north and told to move forwards / backwards', () => {
		
		var position = { x: 0, y: 0 };

		var rover = new Rover(position, 'N');

		rover.move('f');
		expect(rover.position.x).toBe(0);
		expect(rover.position.y).toBe(-1);

		rover.move('b');
		expect(rover.position.x).toBe(0);
		expect(rover.position.y).toBe(0);
	});

	it('Should move south / north when facing south and told to move forwards / backwards', () => {

		var position = { x: 0, y: 0 };

		var rover = new Rover(position, 'S');

		rover.move('f');
		expect(rover.position.x).toBe(0);
		expect(rover.position.y).toBe(1);

		rover.move('b');
		expect(rover.position.x).toBe(0);
		expect(rover.position.y).toBe(0);
	});

	it('Should move west / east when facing west and told to move forwards / backwards', () => {

		var position = { x: 0, y: 0 };

		var rover = new Rover(position, 'W');

		rover.move('f');
		expect(rover.position.x).toBe(-1);
		expect(rover.position.y).toBe(0);

		rover.move('b');
		expect(rover.position.x).toBe(0);
		expect(rover.position.y).toBe(0);
	});

	it('Should move east / west when facing east and told to move forwards / backwards', () => {

		var position = { x: 0, y: 0 };

		var rover = new Rover(position, 'E');

		rover.move('f');
		expect(rover.position.x).toBe(1);
		expect(rover.position.y).toBe(0);

		rover.move('b');
		expect(rover.position.x).toBe(0);
		expect(rover.position.y).toBe(0);
	});

	it('Should be more capable than Zoolander', () => {
		
		var position = { x: 0, y: 0 };

		var rover = new Rover(position, 'N');

		rover.move('l');
		rover.move('f');

		expect(rover.position.x).toBe(-1);
		expect(rover.position.y).toBe(0);

		// Reset the rover
		rover = new Rover(position, 'N');
		rover.move('l');
		rover.move('l');
		rover.move('f');
		
		expect(rover.position.x).toBe(0);
		expect(rover.position.y).toBe(1);

	});

});