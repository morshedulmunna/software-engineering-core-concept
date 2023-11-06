const crypto = require("crypto");

const start = Date.now();
let callsCompleted = 0;
let afterCall = 4;
const numCalls = 9;

function check() {
    crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
        console.log(Date.now() - start);

        callsCompleted++;
        if (callsCompleted === afterCall) {
            console.log("Done");
            afterCall = afterCall + 4;
        }
    });
}

for (let i = 0; i < numCalls; i++) {
    check();
}
