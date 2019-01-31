/**
 * JavaScript program to remove duplicate items from an array
 */

//Function to remove the duplicates
function removeDuplicates(num) {
    let x;
    const len = num.length;
    const out = [];
    const obj = {};

    for (x = 0; x < len; x++) {
        obj[num[x]] = 0;
    }
    for (i in obj) {
        out.push(i);
    }
    return out;
}
const number = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3];
result = removeDuplicates(number);
console.log(number);
console.log(result);