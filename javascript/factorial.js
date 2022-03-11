function factorial(x) {
    if (x === 0) {
        return 1;
    } else {
        return x * factorial(x-1);
    }
}

const num = 3;

if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`)
}

// first iteration
// 3 * factorial(3 - 1)
// second iteration
// 3 * 2 * factorial(2 - 1)
// third iteration
// 3 * 2 * 1 * factorial(1 - 1)
// last iteration
// 3 * 2 * 1 * 1