/**
 * avaScript program which accept a number as input and insert dashes (-) between each two even numbers.
 *  For example if you accept 025468 the output should be 0-254-6-8
 */

//Reading from console
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Finding the even numbers
rl.question('Enter a number ', (number) => {
  const result = [number[0]];

  for (let x = 1; x < number.length; x++) {
    if ((number[x - 1] % 2 === 0) && (number[x] % 2 === 0)) {
      result.push('-', number[x]);
    }
    else {
      result.push(number[x]);
    }
  }
  console.log(result.join(''));

  rl.close();
});