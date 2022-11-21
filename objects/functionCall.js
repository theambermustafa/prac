const person = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + " from " + city + ", " + country;
    }
};

const person1 = {
    firstName: "John",
    lastName: "Doe"
};

const person2 = {
    firstName: "Roger",
    lastName: "Federer"
};

console.log(person.fullName.call(person2));

// Call method can also be used to add the values
console.log(person.fullName.call(person2, "Oslo", "NO"));