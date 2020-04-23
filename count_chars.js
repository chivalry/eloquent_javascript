const countBs = function(string) {
    return countChar(string, 'B');
};

const countChar = function(string, char) {
    let buf = 0;
    for (let i = 0; i < string.length; i++) {
        buf += string[i] == char ? 1 : 0;
    }
    return buf;
};

console.log(countBs('BBC'));
console.log(countChar('kakkerlak', 'k'));
