const range = function(start, end, step=1) {
    let buf = [];
    if (start > end) {
        for (let i = start; i >= end; i += step) {
            buf.push(i);
        }
        return buf;
    }
    for (let i = start; i <= end; i += step) {
        buf.push(i);
    }
    return buf;
};

const sum = function(nums) {
    let sm = 0;
    for (let num of nums) {
        sm += num;
    }
    return sm;
};

console.log(range(1, 10));
console.log(range(5, 1, -1));
console.log(sum(range(1, 10)));