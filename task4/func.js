function Person(name,age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function () {
    return 'My name is ' + this.name + ' and I am ' + this.age;
}

function myNew(type, ...args) {
    // create new empty object
    let instance = {};
    // assign prototype to new instance -> Person
    instance.__proto__ = type.prototype;
    // invoke constructor function
    type.call(instance, ...args);
    return instance;
}

const john = myNew(Person, 'John', 30);
john.introduce(); // My name is John and I am 30
