require("dotenv").config();
process.env.UV_THREADPOOL_SIZE = 1;

console.log(process.env.UV_THREADPOOL_SIZE);
const cluster = require("cluster");

if (cluster.isMaster) {
    cluster.fork();
} else {
    // (function (exports, require, module, __filename, __dirname) { // this is Module.prototype Wrapper function
    const express = require("express");
    const crypto = require("crypto");
    const app = express();

    app.get("/", (req, res) => {
        crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
            res.send("Hi Hash There!");
        });
    });

    app.get("/fast", (req, res) => {
        res.send("This is Faster");
    });

    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });

    // })();
}
