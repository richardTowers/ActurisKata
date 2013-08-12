module Calculator {

	export function add(input: string): number {
		var i: number,
			lines: string[],
			tailLines: string[],
			delimiter: string;

		if (input === '') { return 0; }
		else if (input.substr(0, 2) === '//') {
			lines = input.split('\n');
			if (lines.length === 1) { return 0; }
			else if (lines.length === 2 && lines[1] === '') {
				return 0;
			}
			else {
				delimiter = lines[0].charAt(2);
				tailLines = lines.slice(1, lines.length);
				input = tailLines.join('\n');
				input = input.replace(delimiter, ',');
			}
		}

		var numbers = splitOnDelimiters([input], [',', '\n']);

		return numbers.reduce((x, y) => x + y);
	}

	function splitOnDelimiters(
		input: string[],
		delimiters: string[]): number[]{
			if (delimiters.length < 1) {
				return input.map(x => parseInt(x, 10));
			}
			var delimiter = delimiters.pop();
			var newInput = [];
			input.forEach(x => x.split(delimiter).forEach(y => newInput.push(y)));
			return splitOnDelimiters(newInput, delimiters);
	}
}