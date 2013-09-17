/// <reference path="app.ts" />
/// <reference path="Defenitions/jasmine.d.ts" />
describe('Mars Rover', function () {
    it('Rover should exist', function () {
        var rover = new Rover({ x: 0, y: 0 }, 'N');
    });

    it('Rover should take initial position', function () {
        var position = { x: 0, y: 0 };

        var rover = new Rover(position, 'N');

        expect(rover.position).toBe(position);
    });

    it('Should move north when facing north and told to move forwards', function () {
        var position = { x: 0, y: 0 };

        var rover = new Rover(position, 'N');

        rover.move('f');
        expect(rover.position.x).toBe(0);
        expect(rover.position.y).toBe(-1);

        rover.move('f');
        expect(rover.position.x).toBe(0);
        expect(rover.position.y).toBe(-2);
    });

    it('Should move south when facing south and told to move forwards', function () {
        var position = { x: 0, y: 0 };

        var rover = new Rover(position, 'S');

        rover.move('f');
        expect(rover.position.x).toBe(0);
        expect(rover.position.y).toBe(1);

        rover.move('f');
        expect(rover.position.x).toBe(0);
        expect(rover.position.y).toBe(2);
    });

    it('Should move west when facing west and told to move forwards', function () {
        var position = { x: 0, y: 0 };

        var rover = new Rover(position, 'W');

        rover.move('f');
        expect(rover.position.x).toBe(-1);
        expect(rover.position.y).toBe(0);

        rover.move('f');
        expect(rover.position.x).toBe(-2);
        expect(rover.position.y).toBe(0);
    });

    it('Should move east when facing east and told to move forwards', function () {
        var position = { x: 0, y: 0 };

        var rover = new Rover(position, 'E');

        rover.move('f');
        expect(rover.position.x).toBe(1);
        expect(rover.position.y).toBe(0);

        rover.move('f');
        expect(rover.position.x).toBe(2);
        expect(rover.position.y).toBe(0);
    });
});
//@ sourceMappingURL=tests.js.map
