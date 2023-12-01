//============ Closure Examples
function outer() {
    var a = 10;
    function inner() {
        a = a + 1;
        console.log(a);
    }
}
var fn = outer();
fn();
fn();
fn();
Output: 11, 12, 13;
//============End ----------- //

/*
    1. Execution Context
      # Parts
        1.Memory Component or variable environment
        2.Code Component or thread of execution
      #Phases
        1. Creation Phase or memory creation phase
        2. Execution phase or code execution phase  
    2. Call Stack
    3. Function
        1. Function declaration or function statement
        2. function expression -> when store a variable
        3. anonymous function -> no name this function
        4. IIFE (Immediate invoked function expression)
        5. Arrow function
        6. fist class function or higher order function
        7.callback function
        8.parameters vs arguments
    4. hoisting -> When allocating Memory before Execution phase
    5. Primitive vs non-primitive Data types
    6. Errors:
        1. Reference Error: "__" is Not Defined
        2. Reference Error: "__" Can't assess before declaration (temporary Dead zone)
        3. Type Error: "__" when try to mutate a const variable
    7. Scope
    8. Scope chain
    9. lexical Environment -> Execution context er memory component + Parent execution context er lexical Environment 
    10. Closure 
    11. variable shadowing or shadowing
    12. memory leaking problem -> then came to ES6 Let and const
    13. let / const
    14. block scope
    15. Isn't there hoisting in let/const or function?
    16. Temporal Date zone -> it's time zone which one Create phase to before variable assign 


    // Architecture
    17 Microtask -< the callback function from promise
    18 Promise
    19. Javascript Runtime Environment
    20. Javascript Engine
    21. Browser Resource or features
    22. Web Apis
    23. thread
    24. heap
        1. Callback queue or task queue
        2. microtask queue
    25. Event loop
    26. Starvation of function -> when callback queue call another function and continue running and accord loop
*/

/*
    # Operating System
    1. RAM
    2. HHD(Hard Disk)
    3.CPU
    4.Software Installation
    5.Loading on Ram
    6. Processes or Virtual Computer
    7. Context switching
    8. PCB or process control block
    9. Process state
    10. Logical CPU
    11. Concurrency or Concurrent Execution
    12. Parallel Execution
  
*/

/**
 * Node Js
    ## Module
    1. Os
    2. path
    3. fs
    4. http
    // =======
    5. class
      - Constructor functions
      - syntactical sugar
      - property
      - generator function
      - method 
    6. Object
    7. version
        a. Major
        b. minor
        c. patch
    8. route
    9. module wrapper functions || -> 
 */
