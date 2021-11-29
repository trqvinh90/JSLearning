class Vector {
    constructor(inputArray) {
        this.array = inputArray;
    }

    _validateVectorsLength(array) {
        if (this.array.length !== array.length) {
            throw "Two vectors should have a same length";
        }
    }

    _sortAsc(array) {
        return array.sort((a,b) => a-b);
    }

    add({array}) {
        this._validateVectorsLength(array);
        return new Vector(this.array.map((num, index) => {
            return num + array[index];
        }));
    }

    subtract({array}) {
        this._validateVectorsLength(array);
        return new Vector(this.array.map((num, index) => {
            return num - array[index];
        }));
    }

    dot({array}) {
        this._validateVectorsLength(array);
        return this.array.reduce((acc, current, index) => {
            return acc + (current * array[index]);
        }, 0);
    }

    norm() {
        return Math.sqrt(this.array.reduce((acc, current) => {
            return acc + (current ** 2);
        }, 0));
    }

    toString() {
        return `(${this.array.join(',')})`;
    }

    equals({array}) {
        if (this.array.length !== array.length) {
            return false;
        };
        
        // sort 2 arrays
        const sortedMainArr = this._sortAsc(this.array);
        const sortedSecondArr = this._sortAsc(array);

        for (let i = 0; i < sortedMainArr.length; i++) {
            if (sortedMainArr[i] !== sortedSecondArr[i])
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
a.norm();
a.add(c);
a.equals(d);
