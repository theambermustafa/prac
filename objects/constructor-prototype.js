// prototype - allows you to add new properties to object
function Person3(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

Person3.prototype.name = function () {
    return this.firstName + " " + this.lastName;
};