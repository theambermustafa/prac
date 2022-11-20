const person = {
    firstName: "Amber",
    lastName: "Mustafa",
    age: 12,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    language: ""
};

// Changing a property
Object.defineProperty(person, "language", { value: "EN" });

// Debug
console.log(person.language);