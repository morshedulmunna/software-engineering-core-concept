// function outer() {
//     let b = 1;
//     function inner() {
//         return b;
//     }
//     return inner;
// }
// let get_func_inner = outer(); //here create closure outer function

// /* how can access b after returning a outer function.
// normally it's could not be access b because outer function return
// then it's not stay in call stack and memory */
// console.log(get_func_inner());

function outer() {
    let a = 20;

    setTimeout(function () {
        console.log(a);
    }, 0);
}

outer();
