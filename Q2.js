/**
 * JavaScript conditional statement to find the largest of five numbers
 */

//Data
var array = [5, 6, 2, -7, 1];
var i = 1;
large = array[0];

//Finding the largest
while (i < 5) {
    if (array[i] > large) {
        large = array[i];
    }
    i++;
}
console.log(large);