const sum = (...args1) => {
    return (...args2) => {
        if (args2.length > 0) {
            // recursive method
            // combine 2 arrays into main array: args1
            return sum(...args1, ...args2);
        }
        // sum all elements in main array args1
        return args1.reduce((sum, ele) => sum + ele, 0);
    } 
}

// const result = sum(2,3);
// const result = sum(2)(3);
// const result = sum(1,2,3)(4);
const result = sum(1)(2)(3)(4);
console.log(result());