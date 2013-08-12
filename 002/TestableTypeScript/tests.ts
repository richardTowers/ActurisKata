/// <reference path="Defenitions/jasmine.d.ts" />
/// <reference path="app.ts" />

describe('Calculator', () => {

	it('Should add zero numbers', () => {

		expect(Calculator.add('')).toBe(0);

	});

	it('Should add single numbers', () => {

		expect(Calculator.add('1')).toBe(1);
		expect(Calculator.add('2')).toBe(2);

	});

	it('Should add two numbers', () => {

		expect(Calculator.add('1,1')).toBe(2);
		expect(Calculator.add('2,3')).toBe(5);
		expect(Calculator.add('-2,3')).toBe(1);

	});

	it('Should add many numbers', () => {

		expect(Calculator.add('1,1,1,1')).toBe(4);
		expect(Calculator.add('2,3,4,5')).toBe(14);

	});

	it('Should be able to handle new lines', () => {

		expect(Calculator.add('1\n1')).toBe(2);
		expect(Calculator.add('1\n1,2\n3')).toBe(7);

	});

	it('Should handle delimiter with no numbers', () => {
		
		expect(Calculator.add('//;')).toBe(0);
		expect(Calculator.add('//;\n')).toBe(0);

	});

	it('Should add two numbers with a custom delimiter', () => {
		
		expect(Calculator.add('//;\n1;1')).toBe(2);
		expect(Calculator.add('//#\n1#1')).toBe(2);

	});

});