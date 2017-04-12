/*

create an array with even numbers

checking for x % 2 === 0 is a good way

*/

const output = require('./lib/output');
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const evens = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) evens.push(arr[i]);
}

output(evens);