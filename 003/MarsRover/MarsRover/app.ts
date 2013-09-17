interface IPosition {
	x: number;
	y: number;
}

interface IVelocity {
	xSpeed: number;
	ySpeed: number;
}

var directionMap = {
	
	'N': { xSpeed: 0, ySpeed: -1 },
	'S': { xSpeed: 0, ySpeed: 1 }

};

class Rover {

	constructor(position: IPosition, direction: string) {
		
		this.position = position;
		this.velocity = directionMap[direction];

	}

	move(instructions: string) {
		this.position.y += this.velocity.ySpeed;
	}

	position: IPosition;
	private velocity: IVelocity;

}