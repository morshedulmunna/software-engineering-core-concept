## Table of Contents <a name="table"></a>

-   [JavaScript Execution Context](#javascript-execution-context)
    -   [Parts](#parts)
    -   [Phases](#phases)
-   [Call Stack](#call-stack)
-   [Function Details](#function-details)
    -   [Function Declaration or Function Statement](#function-declaration-or-function-statement)
    -   [Function Expression](#function-expression)
    -   [Anonymous Function](#anonymous-function)
    -   [IIFE (Immediately Invoked Function Expression)](#iife-immediately-invoked-function-expression)
    -   [Arrow Function](#arrow-function)
    -   [First-Class Function or Higher-Order Function](#first-class-function-or-higher-order-function)
    -   [Callback Function](#callback-function)
    -   [Parameters vs Arguments](#parameters-vs-arguments)
-   [JavaScript Errors](#javascript-errors)
    -   [ReferenceError](#referenceerror)
    -   [SyntaxError](#syntaxerror)
    -   [TypeError](#typeerror)
    -   [RangeError](#rangeerror)
    -   [URIError](#urierror)
    -   [AggregateError](#aggregateerror)
    -   [InternalError](#internalerror)
    -   [EvalError](#evalerror)
    -   [InvariantError](#invarianterror)

# JavaScript

### How javaScript Work : <a name="javascript-execution-context"></a>

-   Execution Context
    -   Parts<a name="parts"></a>
        -   Memory Component or variable environment
        -   Code Component or thread of execution
    -   Phase<a name="phases"></a>
        -   Creation Phase or memory creation phase
        -   Execution phase or code execution phase
-   Call Stack<a name="call-stack"></a>
    The call stack in JavaScript is a mechanism used to keep track of the functions being executed in a program. It operates on a Last In, First Out (LIFO) basis, meaning that the last function that gets pushed onto the stack is the first one to be popped off and executed.
    When a function is called in JavaScript, it's added to the call stack. As functions are executed, they are removed from the stack. If a function calls another function, the new function gets added on top of the previous one, forming a stack of function calls. When a function finishes executing, it is removed from the stack, and the control returns to the previous function in the stack.

<div style="text-align: right;">
    <a href="#table">
        <button>Go to top</button>
    </a>
</div>

### Function Details :<a name="function-details"></a>

**Function Declaration or Function Statement** : <a name="function-declaration-or-function-statement"></a>

This is a basic way to declare a function using the `function` keyword. or arrow function. it's just declared as a function never call. when it's called that means it's invoked.

```plaintext

function greet() {
    console.log("Hello!");
}
```

<div style="text-align: right;">
    <a href="#table">
        <button>Go to top</button>
    </a>
</div>

**Function Expression** : <a name="function-expression"></a>

A function expression stores a function as a value in a variable.

```plaintext

const sayHello = function() {
    console.log("Hi there!");
};
or -----------------------------------
var greet = () => {
    console.log("Hello!");
}
```

<div style="text-align: right;">
    <a href="#table">
        <button>Go to top</button>
    </a>
</div>

**Anonymous Function** : <a name="anonymous-function"></a>

An anonymous function doesn't have a name; it's assigned to a variable without a specific name.

```plaintext

const add = function(a, b) {
    return a + b;
};
```

**IIFE (Immediately Invoked Function Expression)** : <a name="iife-immediately-invoked-function-expression"></a>

An IIFE runs immediately after it's defined, encapsulating its scope.

```plaintext
(function() {
    console.log("IIFE running!");
})();
```

<div style="text-align: right;">
    <a href="#table">
        <button>Go to top</button>
    </a>
</div>

**Arrow Function** : <a name="arrow-function"></a>

Arrow functions provide a more concise syntax for writing functions.

```plaintext

const multiply = (a, b) => {
    return a * b;
};
```

| Aspect               | Arrow Functions                                                                          | Normal Functions                                           |
| -------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Syntax               | Concise syntax                                                                           | More verbose syntax                                        |
| `this` binding       | Inherits `this` from surrounding context. that means this keyword point her outer scope. | Has its own `this` context determined by how it's called   |
| `arguments` object   | Does not have its own `arguments` object                                                 | Has its own `arguments` object containing passed arguments |
| Constructor usage    | Cannot be used with `new` to create objects                                              | Can be used with `new` to create objects                   |
| `prototype` property | Does not have a `prototype` property                                                     | Has a `prototype` property for object creation             |
| Implicit return      | Can implicitly return a value if single expression                                       | Explicit `return` statement needed                         |

**First-Class Function or Higher-Order Function** : <a name="first-class-function-or-higher-order-function"></a>

Functions are treated as first-class citizens; they can be assigned as values, passed as arguments, and returned from other functions. or Received functions as a parameter and return a function.

<div style="text-align: right;">
    <a href="#table">
        <button>Go to top</button>
    </a>
</div>

```javascript
function sayName(name) {
    return function () {
        console.log(`Hello, ${name}!`);
    };
}
const greeting = sayName("Alice");
greeting(); // Outputs: Hello, Alice!
```

**Callback Function** :<a name="callback-function"></a>

A callback function is passed as an argument to another function and executed after an operation is completed.

```plaintext

function fetchData(callback) {
    // Simulated asynchronous operation
    setTimeout(() => {
        const data = "Some data";
        callback(data);
    }, 1000);
}

function displayData(data) {
    console.log(`Data received: ${data}`);
}

fetchData(displayData); // Outputs: Data received: Some data
```

<div style="text-align: right;">
    <a href="#table">
        <button>Go to top</button>
    </a>
</div>

**Parameters vs Arguments**: <a name="parameters-vs-arguments"></a>

Parameters are variables in a function definition, while arguments are the actual values passed to the function when it's invoked.

```plaintext

function addNumbers(x, y) { // x and y are parameters
    return x + y;
}

const result = addNumbers(3, 5); // 3 and 5 are arguments
```

## JavaScript Errors<a name="javascript-errors"></a>

Certainly! JavaScript has various types of errors that can occur during code execution. Here's an overview of some common errors:

**ReferenceError:**<a name="referenceerror"></a>

This error occurs when trying to use a variable that has not been declared or is not within the current scope. For instance, accessing a variable that doesn't exist will result in a ReferenceError.

**SyntaxError:**<a name="syntaxerror"></a>

This error occurs when there's a mistake in the syntax of the code, making it impossible for the interpreter to parse correctly. Common examples include missing brackets, semicolons, or incorrect keywords.

**TypeError:**<a name="typeerror"></a>

This error occurs when a value is not of the expected type. For instance, attempting to call a method on a variable that is not a function will result in a TypeError.

**RangeError:**<a name="rangeerror"></a>

This error occurs when a numeric value is not within the expected range. For instance, trying to create an array with a negative length will result in a RangeError.

**URIError:**<a name="urierror"></a>

This error occurs when there's a problem with encodeURI(), decodeURI(), encodeURIComponent(), or decodeURIComponent(). For example, passing an invalid parameter to these functions will result in a URIError.

**AggregateError:**<a name="aggregateerror"></a>

Introduced in ES2020, it's used to represent multiple errors in the context of operations like Promise.allSettled() or Promise.any(). This error aggregates several errors into a single object, allowing handling multiple errors simultaneously.
\_\_\_access Errors using:\_\_\_

```
try{

}catch(e){
    console.error(err.error);
}
```

<div style="text-align: right;">
    <a href="#table">
        <button>Go to top</button>
    </a>
</div>

**InternalError:**<a name="internalerror"></a>

This error occurs when an internal error in the JavaScript engine occurs. It's typically non-standard and might not be encountered frequently in regular coding.

**EvalError:**<a name="evalerror"></a>

This error is not commonly used. It was intended to handle errors in the deprecated **eval()** function.

**InvariantError:**<a name="invarianterror"></a>

An error thrown when an invariant condition is violated. It's often used in development environments to signal logical errors in code.

These errors can be caught using try...catch blocks in JavaScript to handle exceptional cases gracefully. Each type of error provides specific information that can be helpful for debugging, allowing developers to identify and fix issues in their code effectively.

<div style="text-align: right;">
    <a href="#table">
        <button>Go to top</button>
    </a>
</div>
