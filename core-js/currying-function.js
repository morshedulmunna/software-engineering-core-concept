// Using closures and bind method to create a curried function
function multiply(a, b, c) {
    console.log(this); // normal function so global objects
    return a * b * c;
}

function curriedMultiply(a) {
    return function (b) {
        return function (c) {
            return multiply.bind(this, a, b, c)();
        };
    };
}

// Curried function
function curriedMultiply2(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
}

// Using the curried function
const result = curriedMultiply(2)(3)(4); // Output will be 24
const result2 = curriedMultiply2(2)(3)(4); // Output will be 24
console.log(result);
console.log(result2);
