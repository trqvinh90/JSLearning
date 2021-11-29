class Vector {
    constructor(inputArray) {
        this.array = inputArray;
    }

    checkIsSameLength(vector) {
        if (this.array.length !== vector.array.length) {
            throw "Two vectors should have a same length";
        }
    }

    add(vector) {
        this.checkIsSameLength(vector);
        const result = [];
        for (let index = 0; index < this.array.length; index++) {
            result.push(this.array[index] + vector.array[index]);
        }
        return result;
    }

    subtract(vector) {
        this.checkIsSameLength(vector);
        const result = [];
        for (let index = 0; index < this.array.length; index++) {
            result.push(this.array[index] - vector.array[index]);
        }
        return result;
    }

    dot(vector) {
        this.checkIsSameLength(vector);
        const result = [];
        for (let index = 0; index < this.array.length; index++) {
            result.push(this.array[index] * vector.array[index]);
        }
        return result.reduce((sum, ele) => sum + ele, 0);
    }

    norm() {
        const result = [];
        for (let index = 0; index < this.array.length; index++) {
            result.push(Math.pow(this.array[index], 2));
        }
        return Math.sqrt(result.reduce((sum, ele) => sum + ele, 0))
    }
}

const a = new Vector([1,2,3]);
const b = new Vector([3,4,5]);
const c = new Vector([5,6,7,8]);

a.add(b);
a.subtract(b);
a.dot(b);
a.norm()
a.add(c);
