function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

//console.log(add(3, 4), sub(3, 4), mul(3, 4));


// identify function

function identifyf(x) {
  return function() {
    return x;
  };
}


function addf(first) {
  return function(second) {
    return first + second;
  };
}

//function liftf(add) {
//  return function() {
//    return add;
//  }();
//}

function liftf(binary) {
  return function(first) {
    return function(second) {
      return binary(first, second);
    }();
  };
}



function curry(binary, first) {
  return function(second) {
    return binary(first, second)
  };
}


var inc = liftf(addf)(1);

console.log(inc(5));
