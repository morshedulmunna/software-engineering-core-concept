// Create a myoOwn MyBind method
let info = {
    name: "Mujib Khan",
    age: 12,
};

let printName = function (birthday, university) {
    console.log(this);
    console.log(birthday);
    // console.log(
    //     `${hello} My name is ${this.name} and age is ${this.age}. my birthday ${birthday}. my university name is ${university}`
    // );
};

Function.prototype.myBind = function (...arg) {
    console.log("arg:", arg);
    let obj = this;
    let params = arg.slice(1);
    console.log(this);
    return function (...arg2) {
        obj.apply(arg[0], [...params, ...arg2]);
    };
};

let printMyInfo2 = printName.myBind(info, "21/04/1997", "BUBT");
printMyInfo2("Hello");
