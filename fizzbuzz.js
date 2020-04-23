for (i = 1; i <= 100; i++) {
    buf = ''
    if (i % 3 == 0) {
        buf += 'Fizz';
    }
    if (i % 5 == 0) {
        buf += 'Buzz';
    }
    console.log(buf ? buf : i);
}