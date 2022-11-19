const person = {
    name: "John Mayer",
    age: 55,
    city: "NYC"
};

// object to array conversion
const myArr = Object.values(person);

for (var x of myArr) {
    console.log(typeof (x));
}