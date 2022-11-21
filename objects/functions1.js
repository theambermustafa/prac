// Functions can be stored in a variable
const fn = function (a, b) {
    return a * b;
}
console.log(fn(5, 2));

// The variable can also be used as a fn
let z = fn(10, 20);
console.log(z);

// Function constructor
const myFn = new Function("a", "b", "return a*b");
let x = myFn(1.5, 2.5);
console.log(x);

// String template example
let stringTemplateEg = `This is a really cool feature. The value is ${x}.`;
console.log(stringTemplateEg.toString());

// Hoisting - Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
function myFunction(y) {
    return y * y;
}
let val = myFunction(5); //Even though it is below myFunction, JS still has hoisted it to to top    
console.log(val);