function complexFunction() {
    setTimeout(() => {
        (function () {
            console.log("hello IEEI function!");
        })();
    }, 5000);

    console.log("Starting function...");

    const myPromise = new Promise((resolve, reject) => {
        resolve("Promise resolved after 2500ms");
    });

    myPromise.then((result) => {
        console.log(result);
    });

    setTimeout(() => {
        console.log("Third setTimeout executed after 1000ms");
    }, 1000);

    setTimeout(() => {
        console.log("Third setTimeout executed after 3000ms");
    }, 3000);

    console.log("Function execution.......");

    setTimeout(() => {
        console.log("Second setTimeout executed after 2000ms");
    }, 2000);
}

// Call the function to execute the defined tasks
complexFunction();
