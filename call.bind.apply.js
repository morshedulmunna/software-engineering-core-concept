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

//
//
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

const introduceBaby = introduce.bind(baby1);
introduceBaby("Hey"); // Output: Hey, my name is Max and I'm 1 years old.
