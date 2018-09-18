var speak = require('./speak');
var math = require('./math');

console.log("Formation Javascript Node.js");

speak.sayHello('Niko');
speak.sayBye('Niko');

console.log(math.addition(14,6));
console.log(math.soustraction(14,6));
console.log(math.multiplication(14,6));
console.log(math.division(14,6));
