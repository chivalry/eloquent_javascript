for (i = 1; i <= 100; i++) {
    let buf = ''
    if (let i % 3 == 0) {
        buf += 'Fizz';
    }
    if (let i % 5 == 0) {
        buf += 'Buzz';
    }
    console.log(buf ? buf : i);
}