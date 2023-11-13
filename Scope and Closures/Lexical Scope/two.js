/**
 * Cheat Lexical Scope
 *
 * 1.eval(...)
 * eval("") always take a string
 * do not use it make code slow and not secure
 *
 * 2.with()
 */

function foo(str, a) {
  eval(str); //cheating
  //this will treat "var b = 3;" as var b = 3 and create a variable and it will access it
  console.log(a, b);
}

var b = 2;

foo("var b = 3;", 1);
