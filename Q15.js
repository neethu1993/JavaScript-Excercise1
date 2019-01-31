/**
 * Convert the following JSON string to an object and access the value of the jason property.
 */
var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';

//converting the json string to object
var object = JSON.parse(jsonStr);

//Taking the values from object list
console.log("Json values:");
console.log(Object.values(object));