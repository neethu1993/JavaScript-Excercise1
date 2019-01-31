/**
 *  JavaScript program to display the current day and time in the following format mm/dd/yyyy
 */

//Finds the todays date here
var today = new Date();
var date = today.getDate();
var day = today.getFullYear();
var month = today.getMonth() + 1;
var hour = today.getHours();
var minute = today.getMinutes();
var seconds = today.getSeconds();
var time = today.getTime();

//Converting single digits to 2 digits
if (date < 10) {
    date = "0" + date;
}
if (month < 10) {
    month = "0" + month
}
if (hour < 10) {
    hour = "0" + hour;
}
if (minute < 10) {
    minute = "0" + minute;
}
if (seconds < 10) {
    seconds = "0" + seconds;
}
console.log("Date : " + month + "/" + date + "/" + day);
console.log("Time : " + hour + ":" + minute + ":" + seconds);