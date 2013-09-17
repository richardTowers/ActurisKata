var directionMap = {
    'N': { xSpeed: 0, ySpeed: -1 }
};

var Rover = (function () {
    function Rover(position, direction) {
        this.position = position;
        this.velocity = directionMap[direction];
    }
    Rover.prototype.move = function (instructions) {
    };
    return Rover;
})();
//@ sourceMappingURL=app.js.map
