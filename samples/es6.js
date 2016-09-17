import * from 'foo';
import { this, and, that } from 'bar';

{
  booleans: [true, false],
  numbers: [0, 1, 2],
  strings: [
    'Single-quoted string',
    "Double-quoted string",
    `back-ticked string`,
    `back-ticked ${string}`
  ],
  nestedObject: {
    withMore: {
      levels: {

      }
    }
  }
}

var foo = 1 || 0;
let bar = 0 + 1;
const baz = -1 * 5;

window.scrollY;
window.scrollTo();

console.log('log me');

export function qux(arg1, arg2, arg3) {
  return [arg1, arg2, arg3];
}

export let quux = (arg1, arg2, arg3) => [arg1, arg2, arg3];

class SomeClass extends AnotherClass {
  function someMethod() {
    return qux(0, false, 'two');
  }
}

let myInstance = new SomeClass();
myInstance.someMethod();

(function () {
    var food = 'Meow Mix';
}());
