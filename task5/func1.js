class MyPromise {
    constructor(callback) {
        this.promise = new Promise(callback);
    }

    syncThen(callback) {
        callback();
        return this.promise;
    }
}

const promise = new MyPromise((resolve) => {
        console.log(1);
        resolve();
    }).syncThen(() => {
        console.log(2);
    }).then(() => {
        console.log(3);
    })
console.log(4);

