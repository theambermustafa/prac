const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());

// Adding a comment to get a hold of it!

console.log(person.id); //This will display the person's id

// Sayonara