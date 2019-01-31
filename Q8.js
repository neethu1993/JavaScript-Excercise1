/**
 * a pattern that matches e-mail addresses
 */

//Function to check the email validity
function valid_email(email) {
    var re = /\S+@[A-Za-z]+\.[A-Za-z]+/;
    return re.test(String(email).toLowerCase());
}
console.log(valid_email("Neethukb13@gmail.com"));