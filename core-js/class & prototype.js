// const user = {
//     name: "Modu",
// };

// const user2 = {
//     __proto__: user,
// };

// console.log(user2.name);

function base() {
    this.a = 20;
}

function inheritBase() {
    this.b = 30;
}

inheritBase.prototype = new base();

let inheritObj = new inheritBase();
console.log(inheritObj);
