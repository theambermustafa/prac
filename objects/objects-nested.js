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