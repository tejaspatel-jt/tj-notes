

====================
## JS Array Methods
- `push()` method adds one or more elements to the end of an array and returns the new length of the array.
- `pop()` method removes the last element from an array and returns that element.
- `shift()` method removes the first element from an array and returns that element.
- `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.
- `map()` returns a new array with transformed elements.
- `filter()` returns a new array with elements that meet a condition.
- `find()` returns the first element that meets a condition or undefined.
- `reduce()` returns a single value that is the result of accumulating values from the array.
- `.splice(index, noOfItemsTobeRemoved, item1, ....., itemX)` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place AND returns an array containing the deleted elements.
- `slice()` method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
```
Positive Index:   0         1        2       3      4
Fruits:       ["Banana", "Orange", "Lemon", "Apple", "Mango"]

Negative Index:  -5        -4       -3      -2     -1
```
- `concat()` method is used to merge two or more arrays. This method does not change the existing arrays but instead returns a new array.
- `every()` method tests whether all elements in the array pass the test implemented by the provided function.
- `some()` method tests whether at least one element in the array passes the test implemented by the provided function.
-  `includes()` method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

### This
- The value of this is determined by how a function is called, not where it is defined.
- In global context, this refers to the global object.
- In object methods, this refers to the object itself.
- In constructor functions, this refers to the new instance.
- Arrow functions inherit this from their enclosing scope.
- In event handlers, this refers to the element that triggered the event.
- You can manually set the value of this using call(), apply(), and bind().

### Function
- Use call() when you want to invoke a function immediately with a specific this context and individual arguments.
- Use apply() when you want to invoke a function immediately with a specific this context and an array of arguments.
- Use bind() when you want to create a new function with a specific this context that can be called later, optionally pre-filling some arguments. 

##### Hoisting Behavior
- var: Hoisted and initialized with undefined. Can be accessed before declaration, but will return undefined.
- let and const: Hoisted but not initialized. Accessing them before declaration results in a ReferenceError due to the Temporal Dead Zone.
- Function Declarations: Hoisted and can be called before their declaration.

### Concepts
- void(0) is used to call another method without refreshing the page during the calling time parameter “zero” will be passed.
```
<a href="javascript:void(0);" onclick="showMessage()">Click me!</a>
```
- `Debouncing` ensures that a function is only executed after a certain amount of idle time, i.e., it delays the execution until the event stops triggering for a specified time (e.g., for search input).
- `Throttling` limits the number of times a function can be executed in a given period, ensuring it runs at regular intervals (e.g., during scroll or window resizing).
- `Promise` callbacks (microtasks) are executed before `setTimeout` (macrotasks).
- 
# ==================

# Closure
A closure is formed when a function is created within another function, allowing the inner function to access variables from the outer function's scope. `This means that even after the outer function has completed execution, the inner function can still use the variables defined in that outer scope. `
This enables functions to “remember” their environment.
#### Example
```javascript
function outer() {
    let outerVar = "I'm in the outer scope!";
    function inner() {
        console.log(outerVar);
    }
    return inner;
}
const closure = outer(); 
closure();

// Even though outer() has finished execution, inner() can 
// still access outerVar because 
// it “remembers” the environment where it was created. 
// This is the closure at work!
```
- A closure allows a function to access variables from its outer (enclosing) function even after that function has finished executing.
- 📌 Global variables can be made private within a function using closures, ensuring they cannot be accessed or modified directly from outside.
- 📌 Closures provide a way to encapsulate private data and create public methods to interact with it.
- Closures help retain references to variables that would otherwise be lost after the execution of the outer function.
#### Practical Applications
```js
function createAccount(initialBalance) {
    let balance = initialBalance; // Private variable

    return {
        deposit(amount) {
            balance += amount;
        },
        withdraw(amount) {
            if (amount > balance) throw new Error("Insufficient funds");
            balance -= amount;
        },
        getBalance() {
            return balance;
        }
    };
}

const account = createAccount(100);
account.deposit(50);
console.log(account.getBalance()); // Output: 150
```
### 👉Closures and IIFE (Immediately Invoked Function Expression)
IIFEs often leverage closures to encapsulate private state or create modules.
```js
const counter = (function () {
    let count = 0;

    return {
        increment: function () {
            count++;
            console.log(count);
        },
        reset: function () {
            count = 0;
            console.log("Counter reset");
        },
    };
})();

counter.increment(); 
counter.increment(); 
counter.reset();
```
##### Output
```
1
2
Counter reset
```

### 👉Closure and setTimeout
Closures are often used in asynchronous programming. For example, with `setTimeout`
```js
function createTimers() {
    for (let i = 1; i <= 3; i++) {
        setTimeout(function () {
            console.log(`Timer ${i}`);
        }, i * 1000);
    }
}
createTimers();
```
##### Output
```
Timer 1
Timer 2
Timer 3
```

### 👉Closures with this keyword
Closures often lead to confusion when dealing with the this keyword, as this is determined by the execution context, not the lexical scope.
```js
function Person(name) {
    this.name = name;
    
    this.sayName = function () {
        console.log(this.name);
    };

    setTimeout(function () {
        console.log(this.name); 
        // Undefined because 'this' refers to global object
    }.bind(this), 1000); 
    // Fix with bind
}

const G = new Person("GFG");
G.sayName();
```
##### Output
```
GFG
GFG
```

### 👉Function Currying in JavaScript (Closure Example)
- Function currying is a technique to transform a function that takes multiple arguments into a series of functions that take one argument at a time. Currying relies on closures because each of the intermediate functions has access to the arguments passed previously.
- `In simple words, currying allows you to create specialized functions by partially applying arguments, which are remembered through closures.`
```js
// Normal Function
// function add(a, b) {
//     return a + b;
// }
// console.log(add(2, 3)); 

// Function Currying
function add(a) {
    return function(b) {
        return a + b;
    };
}

const addTwo = add(2);  // First function call with 2
console.log(addTwo(3));  // Output: 5
```
##### Output
```
5
```

### 👉Benefits of Closures
- **Data Encapsulation**: Closures enable data hiding and abstraction.
- **State Management**: Retain variables between function calls.
- **Callbacks and Event Listeners**: Simplify asynchronous code.

### 👉Common Pitfalls
- **Memory Leaks**: Excessive use of closures may retain unnecessary references to variables, causing memory issues.
- **Performance Overhead**: Overusing closures might lead to larger memory usage due to retained scopes.

### 👉Key Takeaways
- Closures retain access to variables from their parent scope.
- They are heavily used in functional programming, event handlers, callbacks, and stateful functions.
- Always be mindful of memory usage when working with closures. 🤔


