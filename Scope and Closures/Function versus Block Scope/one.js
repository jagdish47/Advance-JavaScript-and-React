//whatever foo has cannot accessible here(Global) -> reference error

function foo(a) {
  var b = 2;
  // some code
  function bar() {
    // ...
    //whatever we mention here will not accessible to foo but bar can access foo and outer global as well
  }
  // more code
  var c = 3;
}
