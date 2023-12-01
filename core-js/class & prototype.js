const user = {
    name: "Modu",
};

const user2 = {
    __proto__: user,
};

console.log(user2.name);
