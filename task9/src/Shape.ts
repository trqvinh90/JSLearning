import { Point } from "./Point";

export abstract class Shape {
    protected color: string;
    protected filled: boolean;
    protected points: Array<Point>;

    constructor(points: Array<Point>);
    constructor(points: Array<Point>, color: string, filled: boolean);
    constructor(points: Array<Point>, color?: string, filled?: boolean) {
        if (points.length <= 2) {
            throw new Error('Shape should have at least 3 points.');
        }
        if (!color && !filled) {
            this.color = 'green';
            this.filled = true;
        } else {
            this.color = color;
            this.filled = filled;
        }
        this.points = points;
    }

    toString(): string {
        const pointsStringFromArray = this.points.join(', ');
        return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'not filled'}. Points: ${pointsStringFromArray}.`;
    }

    getPerimeter(): number {
        return this.points.reduce<number>((acc, currentPoint, currentIndex) => {
            const prevIndex = currentIndex === 0 ? this.points.length - 1 : currentIndex - 1;
            return acc + currentPoint.distance(this.points[prevIndex]);
        }, 0);
    }

    abstract getType(): string;
}
