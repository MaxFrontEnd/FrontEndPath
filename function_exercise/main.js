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
    };
  };
}



function curry(binary, first) {
  return function(second) {
    return binary(first, second)
  };
}

var inc = addf(1)
var inc = liftf(add)(2);
inc = curry(addf, 1);


function twice(binary) {
  return function(a) {
    return binary(a, a);
  };
}

var doubl = twice(add);
var square = twice(mul);

function reverce(binary) {
  return function(first, second) {
    return binary(second, first);
  };
}

function composeu(unary1, unary2) {
  return function (third) {
    return unary2(unary1(third));
  };
}


function composeub(binary1, binary2) {
  return function(third, fours, fives) {
    return binary2(binary1(third, fours), fives);
  };
}
var res = composeub(add, mul)(2, 3, 7);

function limit(binary, times) {
  return function(arg1, arg2) {
    if (times > 0) {
      times -= 1;
      return binary(arg1, arg2);
    }
    return undefined;
  };
}

var add_ltd = limit(add, 1);

//console.log(add_ltd(1, 2));
//console.log(add_ltd(1, 2));


function from(start) {
  return function() {
    var old = start;
    start += 1;
    return old;
  };
}

// My function
function to(generator, upto) {
  return function(from) {
    if(upto > 1){
      //console.log("continue work" + upto);
      upto -= 1;
      return generator(from);
    };
    return undefined;
  };
}

// Teacher function

function toT(generator, upto){
  return function(){
    let value = generator();
    if (value < upto){
      return value;
    }
    return undefined;
  }

}

//var index = toT(from(1), 3);

function fromTo(up, end){
  return function(){
    return toT(from(up), end);
  }();
}

let index = fromTo(3, 6);
//console.log(index());
//console.log(index());
//console.log(index());

function element(array, gen) {
  if(gen === undefined) {
    gen = fromTo(0, array.length);
  }
  return function(){
    let index = gen();
    if(index !== undefined){
      return array[index];
    }
 };
}

//let ele = element(["a", "b", "c", "d"], fromTo(1, 3));
let ele = element(["a", "b", "c", "d"]);

//console.log(typeof ele);
//console.log(ele());
//console.log(ele());
//console.log(ele());
//console.log(ele());
//console.log(ele());


//Collect function

function collect(gen, array) {
  return function() {
    value = gen();
    if (value !==undefined){
      array.push(value);
    }
    return value;
  };
}
var myArray = []
let col = collect(element(["a", "b", "c", "d"]), myArray);

console.log(col());
console.log(col());
console.log(col());
console.log(col());
console.log(col());
console.log(myArray);
