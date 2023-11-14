/*
function doSomething(a){


    //there is b is not Initialize in this scope so it will go outer and check is there b declare Yes
    //a = 2
    //now calling doSomethingElse with arg->2*2 = 4
    b = a + doSomethingElse(a * 2);
    //b = 2+3 = 5
    console.log(b * 3) //5 * 3 = 15

}


function doSomethingElse(a){
    //a = 4
    //return 4-1 = 3
    return a-1;
}

var b;


doSomething(2); //calling doSomething with arg-2

*/

/**
 *
 * Above code we are declare b and doSomething globally which they are accessible to make if proper we have to hide these private details
 *
 */

function doSomething(a) {
  function doSomethingElse(a) {
    return a - 1;
  }

  var b;

  b = a + doSomethingElse(a * 2);
  console.log(b * 3);
}

doSomething(2);

/**
 *
 * Now b and doSomethingElse are not accessible to any outside influence
 *
 */
