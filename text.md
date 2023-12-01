11. variable shadowing or shadowing -> ( var a = 10; {var a = 20} |-> Pointer same memory pointer
    | shadow global scope to block scope | ->| Block scope complete execution end then it's gone| let and const not shadowing ony shadow var |->| ( var a = 10; {let a = 30} && let a = 20; fn x(){var a =30}^^ it's right not iligal shadow ))

12. memory leaking problem -> solve it then came to ES6 Let and const
13. let / const

14. block={} or Component Statement -> (Combine or grouping of multiple statements) if()\_block or Statement | {{{}}}-> lexical Environment working also
15. Block scope - > (what all variable or statement access in the block that is the scope,/ let and const hoisted in the block scope | Block scope complete execution end then it's gone)

16. Isn't there hoisting in let/const or function?
17. Temporal Date zone -> it's time zone which one Create phase to before variable assign
18. Micro Task -> the callback function from promise
19. Promise
20. JavaScript Runtime Environment (browser environment, nodejs Environment)
21. JavaScript Engine
22. Browser Resource or features
23. Web APIS
24. thread
25. heap
    1. Callback queue or task queue
    2. microtask queue
26. Event loop
27. Starvation of function -> when callback queue call another function and continue running and accord loop
28. ->
29. ***
30. this keyword, call , apply() , bind()
31. Normal function vs arrow function -> Main difference this keyword. in arrow function this always point outer scope object | where deacler the function.

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

# ReactJs

    1. What is React. -> Virtual DOM, Real DOM
    2. component
    3. props, props dealing
    4. React Lifecycle
       1. Mounting
          1. constructor()
          2. render()
          3. componentDinMount()
       2. Updating
          1. render()
          2. componentDidUpdate()
       3. Unmounting
          1. componentWillUnmount()

### Advance React

    1. Portals React -> https://react.dev/reference/react-dom/createPortal
    2. forwardRef -> https://react.dev/reference/react/forwardRef
    3.  Error Boundary -> https://react.dev/reference/react/useTransition#displaying-an-error-to-users-with-error-boundary

###### Advance Promise Concept

    1. callback hell

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
