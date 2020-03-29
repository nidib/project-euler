// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number ?

function isPrime(number) {
    let zeroes = 0;
    let prime = false;
    for (let i = Math.floor(number / 2); i > 0; i--) {
        if (number % i === 0) {
            zeroes++;
        }
    }
    if (zeroes === 1) {
        prime = true;
    }
    return prime;
}
let before = Date.now(); // gets time before initializing

let primes = [];
let i = 3;
let max = 10001
while(primes.length < max) {
    if(isPrime(i)) {
        primes.push(i);
    }
    i = i + 2;
}
console.log(primes[primes.length - 2]);

console.log((Date.now() - before) + "ms"); // Outputs how long it took