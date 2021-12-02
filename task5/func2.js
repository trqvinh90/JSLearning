class ReversePromise extends Promise {
    constructor(callback) {
        super(callback);
        this.arrayCbs = [];
    }

    then(callback) {
        this.arrayCbs.push(callback);
        setTimeout(() => {
            this.arrayCbs.reverse().forEach(callback => callback());
            this.arrayCbs = [];
        }, 0);
        return this;
    }
}

const promise = new ReversePromise((resolve) => {
        console.log(1);
        resolve();
    })
    .then(() => console.log(2))
    .then(() => console.log(3))
    .then(() => console.log(4));
