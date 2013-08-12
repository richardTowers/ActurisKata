var Calculator;
(function (Calculator) {
    function add(input) {
        var i, lines, tailLines, delimiters = [',', '\n'], numbers;

        if (input === '') {
            return 0;
        }
        if (input.substr(0, 2) === '//') {
            lines = input.split('\n');

            if (lines.length === 1) {
                return 0;
            }
            if (lines.length === 2 && lines[1].length === 0) {
                return 0;
            }

            delimiters.push(lines[0].charAt(2));

            // Remove the first line from the input:
            input = input.substring(lines[0].length + 1, input.length);
        }

        numbers = splitOnDelimiters([input], delimiters);

        return numbers.reduce(function (x, y) {
            return x + y;
        });
    }
    Calculator.add = add;

    function splitOnDelimiters(input, delimiters) {
        var delimiter, newInput;

        if (delimiters.length < 1) {
            return input.map(function (x) {
                return parseInt(x, 10);
            });
        }

        delimiter = delimiters.pop();

        newInput = [];
        input.forEach(function (x) {
            return x.split(delimiter).forEach(function (y) {
                return newInput.push(y);
            });
        });

        return splitOnDelimiters(newInput, delimiters);
    }
})(Calculator || (Calculator = {}));
//@ sourceMappingURL=app.js.map
