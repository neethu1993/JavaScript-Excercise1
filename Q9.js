/**
 * JavaScript program to list the properties of a JavaScript object
 */

//Function to extract the properties
function _keys(obj) {
    //method returns an array of a given object's own property names.
    if (Object.keys)
        return Object.keys(obj);
    var keys = [];
    for (var key in obj)
        if (obj.has(obj, key))
            keys.push(key);
    return keys;
}
//Data
var student = { name: "David Rayy", class: "VI", rollno: 12 };
console.log(_keys(student));