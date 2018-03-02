// const n = parseFloat(prompt('Enter N'));
// console.log('n: ' + n);

// function fb(value) {
// for (let i = 0; i < n; i++) {

// return (next);
// }

// document.write(next);


function fibon (n) {
    let a = [];
    let x;
    a[0] = 1;
    a[1] = a[0];
    for (let i = 1; i < n; i++) {
        x = a[i] + a[i - 1];
        a.push(x);
    }
    return document.write(n + ' element of Fibonacci array is: ' + a[n]);
}

fibon(parseFloat(prompt('Enter N')));
