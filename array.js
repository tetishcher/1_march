function fibon(n) {
    let a = [];
    let x;
    a[0] = 1;
    a[1] = 1;
    if (n <= 0) {
        document.write('Please enter N>0');
    }
    else {
        for (let i = 1; i < n; i++) {
            x = a[i] + a[i - 1];
            a.push(x);
        }
        return document.write(n + '-th element of Fibonacci array is: ' + a[n - 1]);
    }
}

fibon(parseInt(prompt('Enter N')));
