function sumFibonacci(num) {
    var fibo = sumFibonacci;
    if (num < 1){
        return 0;
    }
    if (num <= 2){
        return 1;
    } else {
    var fiboNum = (fibo(num-1) + fibo(num-2) <= num);
        return fiboNum;
    }

    sumFibonacci(1);
    sumFibonacci(10);
    sumFibonacci(20);
    sumFibonacci(4);
    sumFibonacci(-5);
}

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));

module.exports = sumFibonacci;