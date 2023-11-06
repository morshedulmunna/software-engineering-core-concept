const crypto = require("crypto");

const start = Date.now();
let callsCompleted = 0;
let afterCall = 4;
const numCalls = 9;

function check() {
    crypto.pbkdf2(
        "password",
        "salt",
        100000,
        512,
        "sha512",
        (err, derivedKey) => {
            console.log(Date.now() - start);

            callsCompleted++;
            if (callsCompleted === afterCall) {
                console.log("Done");
                afterCall = afterCall + 4;
            }

            // console.log(derivedKey.toString("hex"));
        }
    );
}

for (let i = 0; i < numCalls; i++) {
    check();
}

/*
    Qus =>
    1. 

*/
