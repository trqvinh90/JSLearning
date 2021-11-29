function sortAsc(array) {
    return array.sort((a,b) => a-b);
}

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

    toString() {
        return `(${this.array.join(',')})`;
    }

    equals(vector) {
        if (this.array.length !== vector.array.length) return false;
        
        // sort 2 arrays
        const sortMainArr = sortAsc(this.array);
        const sortSecondArr = sortAsc(vector.array);

        for (let index = 0; index < sortMainArr.length; index++) {
            if (sortMainArr[index] !== sortSecondArr[index])
                return false;
        }

        return true;
    }
}

const a = new Vector([1,2,3]);
const b = new Vector([3,4,5]);
const c = new Vector([5,6,7,8]);
const d = new Vector([3,1,2]);

a.add(b);
a.subtract(b);
a.dot(b);
a.norm()
a.add(c);
a.equals(d);
