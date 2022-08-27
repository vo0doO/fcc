function fibonacciTriples(num) {
    let f0 = 0, f1 = 1, f2 = 1, sum = 0;

    while (f1 <= num) {
        sum+=f1;
        if (f2 <= num) sum += f2;

        [f0 ,f1] = [f1 + f2, f2 + (f1 + f2)];
        f2 = f0 + f1;

    }
        
    return sum
}

module.exports = {
    fibonacciTriples: fibonacciTriples
}