// These are just getters and setters
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
        this.language = lang;
    }
};

// Set an object property using a setter:
var lang = person.lang = "en";

console.log(lang);