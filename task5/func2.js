class ReversePromise extends Promise {
    constructor(callback) {
        super(callback);
        this.arrayCbs = [];
        setTimeout(() => {
            this.arrayCbs.reverse().forEach(callback => callback());
            this.arrayCbs = [];
        }, 0);
    }

    then(callback) {
        this.arrayCbs.push(callback);
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
