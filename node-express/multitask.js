const crypto = require("crypto");
const https = require("https");
const fs = require("fs");

const start = Date.now();

// This is NetWorking OS Task  asynchronously | Not use ThreadPools why??
function doNetWorkReq() {
    https
        .request("https://google.com", (res) => {
            res.on("data", () => {});
            res.on("end", () => {
                console.log("->Network: ", (Date.now() - start) / 1000 + "ms");
            });
        })
        .end();
}

// Long Timer Processing Task
function doHash() {
    crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
        console.log("DO HASH: ", (Date.now() - start) / 1000 + "ms");
    });
}

doNetWorkReq();

// File System and crypto Module both are use threadPools
// This is same long processing Task asynchronously
fs.readFile("multitask.js", "utf8", () => {
    console.log("FS:", (Date.now() - start) / 1000 + "ms");
});

doHash();
doHash();
doHash();
doHash();
