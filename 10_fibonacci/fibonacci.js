const fibonacci = function(countArg) {
    // check argument's type and make sure we use a number throughout rest of function
    let count;
    if (typeof countArg !== 'number') {
        count = parseInt(countArg);
    } else {
        count = countArg;
    }

    // check for negative numbers and 0s
    if (count < 0) return "OOPS";
    if (count == 0) return 0;

    // initialize first two numbers in sequence
    let firstPrev = 1;
    let secondPrev = 0;

    for (let i = 2; i <= count; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
