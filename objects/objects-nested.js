const cars = {
    brand: "Ferrai",
    model: "F50",
    availableColors: {
        c1: "Red",
        c2: "Black",
        c3: "Blue"
    }
};

let myCar1 = "I have a " + cars.brand + " " + cars.model + " which is " + cars.availableColors.c3 + " in color.";
let myCar2 = "Nancy has a " + cars.brand + " " + cars.model + " which is " + cars.availableColors.c1 + " in color.";

console.log(myCar1);
console.log(myCar2);

// Adding an array inside the object
// cars is an array of objects
const myObj = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
}

// Iteration
var x;
for (let i in myObj.cars) {
    x += myObj.cars[i].name;
    for (let j in myObj.cars[i].models) {
        x += myObj.cars[i].models[j];
    }

    console.log(x);
}