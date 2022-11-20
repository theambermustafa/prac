let str = "Hello World!";
let y = "";
console.log("It will print the index")
for (let x in str) {
    y = y + " " + x;
}

console.log(y);


console.log("It will print the value");
y = "";
for (let x of str) {
    y = y + x;
}

console.log(y);

