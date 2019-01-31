/**
 * JavaScript function to find the difference of two arrays
 */

//Function to find the difference between two arrays
function difference(array1, array2) {
    var array = [];
    var result = [];
    for (let i = 0; i < array1.length; i++) {
        array[array1[i]] = 0;
    }
    for (let i = 0; i < array2.length; i++) {
        if (array[array2[i]] == 0) {
            delete array[array2[i]];
        }
        else {
            array[array2[i]] = 0;
        }
    }
    for (var i in array) {
        result.push(i);
    }
    return result;
}

console.log(difference(['a', 'b'], ['a', 'b', 'c', 'd']));