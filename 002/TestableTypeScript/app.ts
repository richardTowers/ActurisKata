module Calculator {

	export function add(input: string): number {
		var i: number,
			lines: string[],
			tailLines: string[],
			delimiters: string[] = [',', '\n'],
			numbers: number[];

		if (input === '') { return 0; }
		if (input.substr(0, 2) === '//') {

			lines = input.split('\n');

			if (lines.length === 1) { return 0; }
			if (lines.length === 2 && lines[1].length === 0) { return 0; } 

			delimiters.push(lines[0].charAt(2));
			// Remove the first line from the input:
			input = input.substring(lines[0].length + 1, input.length);

		}

		numbers = splitOnDelimiters([input], delimiters);

		return numbers.reduce((x, y) => x + y);
	}

	function splitOnDelimiters(
		input: string[],
		delimiters: string[]): number[] {
			
			var delimiter,
				newInput;

			if (delimiters.length < 1) {
				return input.map(x => parseInt(x, 10));
			}

			delimiter = delimiters.pop();

			newInput = flatten(input.map(x => x.split(delimiter)));

			return splitOnDelimiters(newInput, delimiters);
	}

	function flatten<T>(input: T[][]): T[] {
		return Array.prototype.concat.apply([], input);
	}
}