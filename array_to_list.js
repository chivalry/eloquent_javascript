const arrayToList = function(array) {
    if (array.length == 1) {
        return {value: array[0], rest: null};
    }
    return {value: array[0], rest: arrayToList(array.slice(1))};
};

const listToArray = function(list) {
    if (list.rest == null) {
        return [list.value];
    }
    return [list.value].concat(listToArray(list.rest));
};

const prepend = function(element, list) {
    if (list == null) {
        return {value: element, rest: null};
    }
    return {value: element, rest: list};
};

const nth = function(list, index) {
    return listToArray(list)[index];
};

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
