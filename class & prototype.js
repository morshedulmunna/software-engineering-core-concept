// class example |
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("Some generic sound");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    makeSound() {
        console.log("Woof! Woof!");
    }
}

// example of prototype inharitence
function Animal(name) {
    this.name = name;
}

Animal.prototype.makeSound = function () {
    console.log("Some generic sound");
};

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.makeSound = function () {
    console.log("Woof! Woof!");
};
