/**
 * Cheat Lexical Scope
 * 2. with()
 *
 */

// const obj = {
//   a: 10,
//   b: 20,
//   c: 30,
// };

// console.log(obj);

// obj.a = 1;
// obj.b = 2;
// obj.c = 3;

// console.log(obj);

// with (obj) {
//   a = "Jagdish";
//   b = "Yuvraj";
//   c = "Anshu";
// }

// console.log(obj);

// ----------------------------------------------

function foo(obj) {
  with (obj) {
    a = 2;
  }
}

var o1 = {
  a: 3,
};

var o2 = {
  b: 3,
};

foo(o1);
console.log(o1.a);

foo(o2);
console.log(o2.a);
