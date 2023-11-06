// (function (exports, require, module, __filename, __dirname) { // this is Module.prototype Wrapper function
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// })();
