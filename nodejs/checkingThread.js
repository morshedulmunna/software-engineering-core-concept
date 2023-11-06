const crypto = require("crypto");
const https = require("https");

const start = Date.now();
let callsCompleted = 0;
let afterCall = 4;

/*  
=======Event Loop ==========
const pendingTimers = []
const pendingOSTask = []  => Example: Network req
const pendingOperations = []

=> when my file run  || myFile.runContents()
function shouldContinue(){
    -
    -
    -
    return pendingTimers.length || pendingOSTask.length || pendingOperations.length
}

while (shouldContinue) {
    -
    -
    Event loop running -> take task and set heap -> microtask queue / callback queue to
}
*/

//Checking is really use thread pool 4
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
/**
for (let i = 0; i < 10; i++) {
    check();
}  
 */

// Network request =>
// -> Helping OS Async Header Base on libuv library
function doNetWorkReq() {
    https
        .request("https://google.com", (res) => {
            res.on("data", () => {});
            res.on("end", () => {
                console.log(Date.now() - start);
            });
            res.on("error", (err) => {
                console.error("Error making the request:", err);
            });
        })
        .end();
}

for (let i = 0; i < 2000; i++) {
    doNetWorkReq();
}

// ========================================>
/*
    Qus =>
    1. 

*/
