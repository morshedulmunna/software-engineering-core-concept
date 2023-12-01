const person1 = {
    firstName: "John2",
    lastName: "Doe2",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
};

const person2 = () => {
    var p = {
        firstName: "John",
        lastName: "Doo",
    };
    return p;
};

// Return "John Doe":
console.log(person1.fullName.apply(person2()));
