const person = {
    firstName: "John",
    lastName: "Doe",
    age: 55
};

const x = person;
x.age = 52; // Will change both x.age and person.age

console.log(person);
