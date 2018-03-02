function fibon(n) {
    let x;
    let a = 1;
    let b = 0;
    for (let i = 0; i < n; i++) {
        x = a + b;
        a = b;
        b = x;
    } {
        return document.write(n + '-th element of Fibonacci array is: ' + b);
    }
}

fibon(parseFloat(prompt('Enter N')));
