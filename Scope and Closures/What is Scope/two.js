const g = 100;

function one() {
  var a = 10;
  two();
  function two() {
    var b = 20;
    three();
    function three() {
      var c = 30;
      four();
      function four() {
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(g);
      }
    }
  }
}
one();
