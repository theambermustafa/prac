function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;

}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

console.log(myFather, myMother);

// We cannot add a new property to an existing constructor
Person.nationality = "Australian";
console.log(myFather.nationality);

function Person2(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "American"; // Add a new property and then it will then be added
}

const dad = new Person2("Tim", "Cook", 55, "Blue");
console.log(dad);