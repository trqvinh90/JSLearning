function Person(name,age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function () {
    return `My name is ${this.name} and I am ${this.age}`;
}

function myNew(constructorName, ...args) {
    const objPrototype = Object.create(constructorName.prototype);
    const instance = constructorName.apply(objPrototype, args);
    return ((typeof instance === 'object' || typeof instance === 'function') && instance) || objPrototype;
}

const john = myNew(Person, 'John', 30);
john.introduce(); // My name is John and I am 30
