/// <reference path="Defenitions/jasmine.d.ts" />
/// <reference path="app.ts" />
describe('Calculator', function () {
    it('Should add zero numbers', function () {
        expect(Calculator.add('')).toBe(0);
    });

    it('Should add single numbers', function () {
        expect(Calculator.add('1')).toBe(1);
        expect(Calculator.add('2')).toBe(2);
    });

    it('Should add two numbers', function () {
        expect(Calculator.add('1,1')).toBe(2);
        expect(Calculator.add('2,3')).toBe(5);
        expect(Calculator.add('-2,3')).toBe(1);
    });

    it('Should add many numbers', function () {
        expect(Calculator.add('1,1,1,1')).toBe(4);
        expect(Calculator.add('2,3,4,5')).toBe(14);
    });

    it('Should be able to handle new lines', function () {
        expect(Calculator.add('1\n1')).toBe(2);
        expect(Calculator.add('1\n1,2\n3')).toBe(7);
    });

    it('Should handle delimiter with no numbers', function () {
        expect(Calculator.add('//;')).toBe(0);
        expect(Calculator.add('//;\n')).toBe(0);
    });

    it('Should add two numbers with a custom delimiter', function () {
        expect(Calculator.add('//;\n1;1')).toBe(2);
        expect(Calculator.add('//#\n1#1')).toBe(2);
    });
});
//@ sourceMappingURL=tests.js.map
