let buf = ''
for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 4; j++) {
        buf += i % 2 == 0 ? '# ' : ' #';
    }
    buf += '\n';
}
console.log(buf)