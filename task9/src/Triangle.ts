import { Point } from './point';
import { Shape } from './Shape';

export class Triangle extends Shape {
    constructor(point1: Point, point2: Point, point3: Point);
    constructor(point1: Point, point2: Point, point3: Point, color: string, filled: boolean);
    constructor(point1: Point, point2: Point, point3: Point, color?: string, filled?: boolean) {
        super(new Array<Point>(point1, point2, point3), color, filled);
    }

    // TS 4.3 -> use override keyword
    toString(): string {
        const formattedPoints = this.points.map((point, index) => `v${index+1}=${point.toString()}`);
        return `Triangle[${formattedPoints.join(',')}]`;
    }

    getType(): string {
        const sides = this.points.map((point, index) => {
            const prevIndex = index === 0 ? this.points.length-1 : index-1;
            return point.distance(this.points[prevIndex]).toFixed(2);
        });
        if (sides[0] === sides[1] && sides[1] === sides[2]) {
            return 'equilateral triangle';
        }
        if (sides[0] === sides[1] || sides[0] === sides[2] || sides[1] === sides[2]) {
            return 'isosceles triangle';
        }
        return 'scalene triangle';
    }
}
