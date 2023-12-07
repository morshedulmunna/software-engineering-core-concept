function base() {
    this.a = 20;
}

function inheritBase() {
    this.b = 30;
}

inheritBase.prototype = new base();

let inheritObj = new inheritBase();
console.log(inheritObj);
