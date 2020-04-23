const reverseArray = function(array) {
    let buf = [];
    for (let i = array.length - 1; i >= 0; i--) {
        buf.push(array[i]);
    }
    return buf;
};

const reverseArrayInPlace = function(array) {
    for (let i = 0; i <= array.length / 2; i++) {
        let elem = array[i];
        let mirror_index = array.length - i - 1;
        array[i] = array[mirror_index];
        array[mirror_index] = elem;
    }
}

console.log(reverseArray(['A', 'B', 'C']));
let arrayValue = ['1', '2', '3', '4', '5'];
console.log(reverseArrayInPlace(arrayValue));
console.log(arrayValue);
