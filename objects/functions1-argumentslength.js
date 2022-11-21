function function1(a, b, c, d, e, f) {
    return "The sum is: "+ Number(a + b + c + d + e + f) + " \nThe total arguments being used are: " + arguments.length;
}

console.log(function1(1, 2, 3, 4, 5, 6));