// "strict mode"
function addn(...args) {
    let sum = 0;
    for (let i of args) {
        sum += i;
    }
    return sum;
}

let val = addn(1,2,3,4);

console.log(val);