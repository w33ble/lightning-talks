/*

calculate the average age of users, an array of objects

then, calculate the average age by gender

example user object:
{
  "id": 6,
  "first_name": "Karen",
  "last_name": "Jordan",
  "email": "kjordan5@cpanel.net",
  "gender": "Female",
  "age": 48
}

*/

const output = require('./lib/output');
const users = require('./users.json');

// show the users data
output(users);

// for loop to calculate ages
// let sumAges = 0;

// for (let i = 0; i < users.length; i++) {
//   const { age } = users[i];
//   sumAges += age;
// }

// output({ averageAge: sumAges / users.length })