// First, Compiler declares a variable (if not previously declared) in the current Scope,
// and second, when executing, Engine looks up the variable in Scope and assigns to it, if found

// -------------------
// function foo(a) {
//   console.log(a);
// }
// foo(2);

// ----------------------
// function hello(a) {
//   var b = a;
//   return a + b;
// }
// var c = hello(2);
// console.log(c);

// ------------------------

function foo(a) {
  //outside function there is global scope if b will not found here it will look into global
  console.log(a + b);
}
var b = 2;
foo(2);
