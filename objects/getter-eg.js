// A simple function fullName()
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

let fname = person.fullName();

const person2 = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
};

let fname2 = person2.fullName;

console.log(fname, fname2);

// Impl of line 15 is easier than impl of line 5
// How?
// line 10 - person.fullName() had to be called
// line 15 - person.fullName is called - i.e. simpler syntax