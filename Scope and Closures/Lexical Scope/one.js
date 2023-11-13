/**
 * Lexical Scope is based on where variables and blocks are authorized.
 * Each function creates new bubble scope
 *
 * Shadowing
 * The same identifier name can be specified at multiple layers of nested scope, which is called shadowing
 */

function foo(a) {
  var b = a * 2;

  function bar(c) {
    console.log(a, b, c);
  }

  bar(b * 3);
}

foo(2);
