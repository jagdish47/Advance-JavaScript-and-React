function foo(a) {
  console.log(a + b);
  b = a;
}

foo(2);

/**
 *
 * We have created a function foo and passing an argument a and we are consoling the b
 * So it will not presend in current scope so engine will go till globla scope still it's
 * not there so it will give you ReferenceError that the b is not defined.
 *
 */

/**
 * Reference Error -
 * Reference Error comes when some Scope resolution Failure
 *
 * TypeError -
 * Scope Resolution is successfull but there was an illegal/impossible action attempted against
 * result
 *
 */
