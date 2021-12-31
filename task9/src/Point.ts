export class Point {
    x: number;
    y: number;

    constructor();
    constructor(x: number, y: number);
    constructor(x?: number, y?: number) {
        this.x = x || 0;
        this.y = y || 0;
    }

    toString(): string {
        return `(${this.x}, ${this.y})`;
    }

    distance(): number;
    distance(other: Point): number;
    distance(x: number, y: number): number;
    distance(pointOrNumber?: Point | number, y?: number): number {
        if (pointOrNumber !== undefined) {
            let coordinatorX = 0, coordinatorY = y;
            if (pointOrNumber instanceof Point) {
                // second overload
                coordinatorX = pointOrNumber.x;
                coordinatorY = pointOrNumber.y;
            } else if (y !== undefined) {
                // third overload
                coordinatorX = pointOrNumber;
            }
            return Math.sqrt((this.x - coordinatorX)**2 + (this.y - coordinatorY)**2);
        }

        // first overload
        return Math.sqrt(this.x**2 + this.y**2);
    }
}