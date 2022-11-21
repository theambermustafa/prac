function whosPaying(nam) {
    let randomPerson = Math.floor((Math.random() * nam.length));
    console.log(nam[randomPerson], "is buying dinner!");
}

const names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
whosPaying(names);