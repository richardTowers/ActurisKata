var Calculator;
(function (Calculator) {
    function add(input) {
        var i, lines, tailLines, delimiter;

        if (input === '') {
            return 0;
        } else if (input.substr(0, 2) === '//') {
            lines = input.split('\n');
            if (lines.length === 1) {
                return 0;
            } else if (lines.length === 2 && lines[1] === '') {
                return 0;
            } else {
                delimiter = lines[0].charAt(2);
                tailLines = lines.slice(1, lines.length);
                input = tailLines.join('\n');
                input = input.replace(delimiter, ',');
            }
        }

        var numbers = splitOnDelimiters([input], [',', '\n']);

        return numbers.reduce(function (x, y) {
            return x + y;
        });
    }
    Calculator.add = add;

    function splitOnDelimiters(input, delimiters) {
        if (delimiters.length < 1) {
            return input.map(function (x) {
                return parseInt(x, 10);
            });
        }
        var delimiter = delimiters.pop();
        var newInput = [];
        input.forEach(function (x) {
            return x.split(delimiter).forEach(function (y) {
                return newInput.push(y);
            });
        });
        return splitOnDelimiters(newInput, delimiters);
    }
})(Calculator || (Calculator = {}));
//@ sourceMappingURL=app.js.map
