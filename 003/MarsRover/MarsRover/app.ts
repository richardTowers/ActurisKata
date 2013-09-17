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
	'E': { xSpeed: 1, ySpeed: 0 },
	'S': { xSpeed: 0, ySpeed: 1 },
	'W': { xSpeed: -1, ySpeed: 0 }

};

class Rover {

	constructor(position: IPosition, direction: string) {
		
		this.position = position;
		this.velocity = directionMap[direction];

	}

	move(instructions: string) {

		switch(instructions) {

			case 'f':
				this.position.y += this.velocity.ySpeed;
				this.position.x += this.velocity.xSpeed;
				break;
			case 'b':
				this.position.y -= this.velocity.ySpeed;
				this.position.x -= this.velocity.xSpeed;
				break;
			case 'l':
				this.velocity.ySpeed = 0;
				this.velocity.xSpeed = -1;
				break;

		}
	}

	position: IPosition;
	private velocity: IVelocity;

}