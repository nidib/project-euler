// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function isPrime(number) {
    let zeroes = 0;
    let prime = false;
    for(let i = Math.floor(number/2); i > 0; i--) {
        if(number % i === 0) {
            zeroes++;
        }
    }
    if(zeroes === 1) {
        prime = true;
    }
    return prime;
}
let max = 600851475143;
for(let i = 2; i < max; i++) {
    let div = max % i;
    if(div === 0) {
        if(isPrime(i)) {
            console.log(i);
        }
    }
}