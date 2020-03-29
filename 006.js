// The sum of the squares of the first ten natural numbers is,
//     1^2 + 2^2 + ... + 10^2 = 385

// The square of the sum of the first ten natural numbers is,
//     (1 + 2 +...+10)^2 = 55^2 = 3025

// Hence the difference between the sum of the squares of the 
// first ten natural numbers and the square of the sum is 3025−385 = 2640

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

let sqOfSum = 0;
let sumOfSq = 0;
let max = 100

for(let i = 1; i <= max; i++) {
    sumOfSq += Math.pow(i, 2);
    sqOfSum += i;
}
sqOfSum = Math.pow(sqOfSum, 2);

console.log(Math.abs(sqOfSum - sumOfSq));

