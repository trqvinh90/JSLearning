class ReversePromise {
    constructor(callback) {
        this.arrayCbs = [];
        this.promise = new Promise(callback).finally(() => {
            this.arrayCbs.forEach(element => {
                element();
            });
        });
    }

    then(callback) {
        this.arrayCbs.unshift(callback);
        return this;
    }
}

const promise = new ReversePromise((resolve) => {
        console.log(1);
        resolve();
    })
    .then(() => console.log(2))
    .then(() => console.log(3))
    .then(() => console.log(4))
