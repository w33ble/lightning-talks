/*

modify the lib/user class to set 'saved' to true when calling .save()

*/

const User = require('./lib/user');

const joe = new User('w33ble', 'qwerty');

// joe.activate();
console.log('joe', joe.get())

const joe2 = joe.clone();
console.log('joe2', joe2.get())

// joe2.save(function (err) {
//   if (!err) {
//     console.log('joe2 has been saved');
//   }
// })

// console.log('joe2', joe2.get())
