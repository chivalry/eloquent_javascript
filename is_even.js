const isEven = function(num) {
    if (num < 0) {
        return isEven(num * -1);
    }
    if (num == 0) {
        return true;
    }
    if (num == 1) {
        return false;
    }
    return isEven(num - 2);
};

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));