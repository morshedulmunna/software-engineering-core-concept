const crypto = require("crypto");
const https = require("https");

const start = Date.now();
let callsCompleted = 0;
let afterCall = 4;

/*  
=======Event Loop ==========

start: my Node File 
=> when my file run  || myFile.runContents()

const pendingTimers = []
const pendingOSTask = []  => Example: Network req
const pendingOperations = []

function shouldContinue(){
    - check one: any pending setTimeout, setInterval, setImmediate
    -check two: any pending OS task? (Like server listening to port)
    -check three: any pending long running Operations? like fs Module

    return pendingTimers.length || pendingOSTask.length || pendingOperations.length
}

while (shouldContinue) {
    -1 Node looks pendingTimers and sees if any function is ready to be called, setTimeout, setInterval
    -2 Node looks at pendingOsTask and pendingOperations and calls relevant callback
    -3 Pause Execution. Continue when.......
        - a new pending OS task is Done
        - a new pending Operation is Done
        - a new pending Timer is Done
    -4  Looks at pendingTimers, call any setImmediate
    -5  handle any close events

    Event loop running -> take task and ready to call -> Pass it Call Stack for Execute the function
}
End: Back to Terminal
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
/* 
for (let i = 0; i < 2000; i++) {
    doNetWorkReq();
}
*/

// ========================================>
/*
    Qus =>
    1. 

*/
