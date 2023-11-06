# JavaScript

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
    17 Micro Task -< the callback function from promise
    18 Promise
    19. JavaScript Runtime Environment
    20. JavaScript Engine
    21. Browser Resource or features
    22. Web APIS
    23. thread
    24. heap
        1. Callback queue or task queue
        2. microtask queue
    25. Event loop
    26. Starvation of function -> when callback queue call another function and continue running and accord loop

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

# Node Js

<!-- Node JS Deep Thinking -->

    Class -1
        - Javascript(100%js) -> nodeJs(50%js, 50%c++) -> v8(30%js, 70%c++) & libuv(100%C++)
        - Node Modules -> http,fs,crypto,path and lots

    class -2
        - Javascript

<!-- Node JS Deep Thinking -->

    Module
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
    9. Restful API
       1. REST -> Representational state Transfer
        ====== Set of Rules for REST
            - Stateless Communications
            - Cacheability and Layered System
            - Use of Standard Methods and Uniform Interface
              - **GET**: Retrieves a resource or collection of resources.
              - **POST**: Creates a new resource or submits data for processing.
              - **PUT**: Updates an existing resource fully by replacing it with new data.
              - **PATCH**: Partially updates a resource with specific changes.
              - **DELETE**: Removes a resource.
            - Clear and Consistent Naming Conventions
       2. APIS -> Application Programming Interface
