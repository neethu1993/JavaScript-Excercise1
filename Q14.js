/**
 * Exercise 1: Display all objects with occupation as 'Programmer'

Exercise 2: Sort the object basis the age key in the descending order


Exercise 3: Recreate the above array of objects into the following object of objects :{ 'Team Leader' : [{'name':_____________, 'age':__________},{}],
'<anotheroccupation>': [{'name':______________, 'age':________},{}]}

Exercise 4: Use the map function to create a new array containing only names present in myObj.
 */

//Data
var myObj =
    [{ 'name': 'Saurabh', 'age': 30, 'occupation': "Team Leader" },
    { 'name': 'Anupriya', 'age': 32, 'occupation': "Team Leader" },
    { 'name': 'Kalyani', 'age': 25, 'occupation': "Programmer" },
    { 'name': 'Damodaran', 'age': 27, 'occupation': "Programmer" },
    { 'name': 'Krishnakath', 'age': 22, 'occupation': "Programmer" },
    { 'name': 'Venketraman', 'age': 28, 'occupation': "Programmer" }];

//Function to get the list of programmers
function selectProgrammer(object) {
    var output = [];
    for (i in object) {
        if (object[i].occupation == "Programmer") {
            output.push(object[i]);
        }
    }
    return output;
}

console.log(" All objects with occupation as 'Programmer':");
console.log(selectProgrammer(myObj));

//Sort based on age
console.log("\nSort the object basis the age key in the descending order:");
console.log(myObj.sort(function (x, y) {
    return (x.age - y.age);
}).reverse());

//Takin the objects of object
console.log("\n Object of objects:");
var TeamLeader = [];
var Programmer = [];
for (i in myObj) {
    var sub = { 'name': myObj[i].name, 'Age': myObj[i].age };
    if (myObj[i].occupation === "Team Leader") {
        TeamLeader.push(sub);
    }
    else {
        Programmer.push(sub);
    }
}
var obj = { TeamLeader, Programmer };
console.log(obj);

//Extracting the names
console.log("\nNames:");
const names = myObj.map(x => x.name);
console.log(names);