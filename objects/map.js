const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log(fruits);

let text = "";
fruits.forEach(function (value, key) {
    text += key + ' = ' + value;
});

// Create Objects
const apples = { name: 'Apples' };
const bananas = { name: 'Bananas' };
const oranges = { name: 'Oranges' };

// Create a Map
const fruitss = new Map();

// Add new Elements to the Map
fruitss.set(apples, 500);
fruitss.set(bananas, 300);
fruitss.set(oranges, 200);

console.log(fruitss)