/**
 * JavaScript function that accepts two arguments,    a string and a letter and 
 * the function will count the number of occurrences of the specified letter within the string. 
 */

//Function to find the word count
function wordCount(string, word) {
    var count = 0;
    for (key in string) {
        if (string[key] == word) {
            count++;
        }
    }
    return count;
}
console.log(wordCount('gmail.com', 'm'));