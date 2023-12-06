// The call() method calls a function with a given this value and arguments provided individually.
function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Baby(name, age) {
    Person.call(this, name, age);
}

const baby = new Baby("Alex", 1);
console.log(baby.name); // Output: Alex
console.log(baby.age); // Output: 1

// The apply() method calls a function with a given this value and arguments provided as an array.
function introduce(greeting) {
    console.log(
        `${greeting}, my name is ${this.name} and I'm ${this.age} years old.`
    );
}

const person = {
    name: "Alice",
    age: 25,
};

introduce.apply(person, ["Hi"]); // Output: Hi, my name is Alice and I'm 25 years old.

// The bind() method creates a new function that, when called, has its this value set to a specific value, and arguments are fixed
function introduce(greeting) {
    console.log("Binding...", this);

    console.log(
        `${greeting}, my name is ${this.name} and I'm ${this.age} years old.`
    );
}

const baby1 = {
    name: "Max",
    age: 1,
};

const introduceBaby = introduce.bind(baby1, ["Hey"]);
introduceBaby(); // Output: Hey, my name is Max and I'm 1 years old.

// Create a myoOwn MyBind method
// let info = {
//     name: "Muhib Khan",
//     age: 12,
// };

// let printName = function (birthday, university, hello) {
//     console.log(
//         `${hello} My name is ${this.name} and age is ${this.age}. my birthday ${birthday}. my university name is ${university}`
//     );
// };

// let printMyInfo = printName.bind(info, "21/04/1997", "BUBT");
// printMyInfo("Hi");

// Function.prototype.myBind = function (...arg) {
//     console.log("arg:", arg);
//     let obj = this;
//     let params = arg.slice(1);
//     console.log("params:", params);
//     return function (...arg2) {
//         obj.apply(arg[0], [...params, ...arg2]);
//     };
// };

// let printMyInfo2 = printName.myBind(info, "21/04/1997", "BUBT");
// printMyInfo2("Hello");
