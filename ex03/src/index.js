function rangeOfNumbers(startN, endN) {
    if (endN < startN) {
        return [];
    } else {
        const countArray = rangeOfNumbers(startN, endN-1);
        countArray.push(endN);
        return countArray;
    }
    rangeOfNumbers(1, 7);
    rangeOfNumbers(3, 10);
    rangeOfNumbers(5, 5);
    rangeOfNumbers(7, 5);
}

console.log(rangeOfNumbers(1, 7));
console.log(rangeOfNumbers(3, 10));
console.log(rangeOfNumbers(5, 5));
console.log(rangeOfNumbers(7, 5));

module.exports = rangeOfNumbers;