var directionMap = {
    'N': { xSpeed: 0, ySpeed: -1 },
    'E': { xSpeed: 1, ySpeed: 0 },
    'S': { xSpeed: 0, ySpeed: 1 },
    'W': { xSpeed: -1, ySpeed: 0 }
};

var Rover = (function () {
    function Rover(position, direction) {
        this.position = position;
        this.velocity = directionMap[direction];
    }
    Rover.prototype.move = function (instructions) {
        switch (instructions) {
            case 'f':
                this.position.y += this.velocity.ySpeed;
                this.position.x += this.velocity.xSpeed;
                break;
            case 'b':
                this.position.y -= this.velocity.ySpeed;
                this.position.x -= this.velocity.xSpeed;
                break;
        }
    };
    return Rover;
})();
//@ sourceMappingURL=app.js.map
