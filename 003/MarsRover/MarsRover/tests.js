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
});
//@ sourceMappingURL=tests.js.map
