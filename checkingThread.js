// process.env.UV_THREADPOOL_SIZE = 2;      -> Not working

const crypto = require("crypto");
const start = Date.now();

function check() {
    crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
        console.log(Date.now() - start);
    });
}

check();
check();
check();
check();
// =wait
check();
check();
check();
check();
// =wait
check();
