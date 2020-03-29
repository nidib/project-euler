// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

function primesUntil(max) {
    let arr = new Array(max + 1).fill(true);
    arr[0] = false;
    arr[1] = false;

    let maxRt = Math.sqrt(max);
    for (let i = 2; i <= maxRt; i++) {
        if (arr[i]) {
            for (let j = i * i; j <= max; j += i) {
                arr[j] = false;
            }
        }
    }

    let newArr = [];
    let sum = 0;
    arr.forEach((item, index) => {
        if (item) {
            newArr.push(index);
            sum+=index;
        }
    });

    return sum;
}


console.log(primesUntil(2000000));