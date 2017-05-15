/*

use call to make increment modify state

*/

function increment() {
  this.count += 1;
  console.log('this.count', this.count)
}

const state = { count: 10 };

increment();