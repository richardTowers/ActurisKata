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

	

});