const person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
};

// document.getElementById("demo").innerHTML = person["firstname"] + " is " + person["age"] + " years old.";

let x = person["firstname"] + " is " + person["age"] + " years old.";
console.log(x);

let y = person.firstname + " is " + person.age + " years old.";
console.log(y);

// Both will yield the same result

// const person = {
//     fname:" John",
//     lname:" Doe",
//     age: 25
//   };
//   It will iterate through every element inside the person object
let txt = "";
for (let x in person) {
    txt += person[x];
}

console.log(txt);