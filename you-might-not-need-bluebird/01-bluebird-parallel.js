/*

fetch users with id 1 through 5

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

const Bluebird = require('bluebird');
const users = require('./users.json');
const output = require('../lib/output');

function fetch(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users.reduce((acc, user) => {
        if (user.id === id) return user;
        return acc;
      }, undefined);
      resolve(user);
    }, 100);
  });
}

// show how fetch works
fetch(2).then(output);

// fetch users 1 through 5
// const usersToFetch = [1, 2, 3, 4, 5];
// Bluebird.map(usersToFetch, fetch).then(output);