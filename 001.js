// If we list all the natural numbers below 10 that are multiples of 3 or 5, 
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

function sumOfMultiplesInRage(multiple1, multiple2, max) {
    let multiples = [];
    let sum = 0;
    
    for(let i = multiple1; i < max; i++) {
        if (i % multiple1 === 0 || i % multiple2 === 0) {
            if(!multiples.includes(i)) {
                sum += i;
            }
        }
    }

    console.log(sum);
}

sumOfMultiplesInRage(3, 5, 1000);
