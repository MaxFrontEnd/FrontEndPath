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

//console.log(col());
//console.log(col());
//console.log(col());
//console.log(col());
//console.log(col());
//console.log(myArray);

// filter function
function filter(gen, predicat) {
  return function recur() {
    var value = gen();
    if (value === undefined || predicat(value)) {
      return value;
    }
    return recur();
  };
}

let fill = filter(fromTo(0, 5),
function third(value) {
  return (value % 3) === 0;
});

//console.log(fill());
//console.log(fill());


//concat function

function concat(gen1, gen2){
  return function(){
    value = gen1();
    if(value !== undefined) {
      return value;
    }
    else {
      value = gen2();
    }
    return value;
  };
}

let con = concat(fromTo(0,3), fromTo(1,3));

//console.log(con());

// series generator

function gensymf(series) {
  var iter = 0;
  return function() {
    iter += 1
    return series + iter;
  };
}

// let genH = gensymf("H");
// console.log(genH());
// console.log(genH());
// let genF = gensymf("F");
// console.log(genF());
// console.log(genF());

// fibonaci function
// big one
function fibonaccif(first, second) {
  num = 0;
  return function() {
    if (num === 0) {
      num = 1;
      return first;
    }
    if (num === 1) {
      num = 2;
      return second;
    }

    let val = first + second;
    first = second;
    second = val;
    return val;
  }
}

//smoll one

function fibonaccifs(a, b){
  return function () {
    var next = a;
    a = b;
    b += next;
    return next;
  };
}
let fib = fibonaccifs(0, 1);
// console.log(fib());
// console.log(fib());
// console.log(fib());
// console.log(fib());
// console.log(fib());
// console.log(fib());
// console.log(fib());
// console.log(fib());
// console.log(fib());
// console.log(fib());

// counter function - returns an object containing two functions

function counter(num) {
    return obj = {
      up: function() {
        num += 1;
        return num;
      },
      down: function() {
        num -= 1;
        return num;
      }
  };
}

// let objectCounter = counter(10);
// let uper = objectCounter.up;
// let downer = objectCounter.down;
//
// console.log(uper());
// console.log(uper());
// console.log(downer());
// console.log(uper());
// console.log(uper());
// console.log(uper());

// revoce the invoke functions

function revocable(binary){
  let stop = 0;
  return obj = {
    invoke: function(num1, num2) {
      if (stop === 0) {
        return binary(num1, num2);
      } else {
        return undefined;
      }
    },
    revoke: function() {
      if (stop === 0) {
        stop = 1;
      }
    }
  };
}

var rev = revocable(add);
let add_rev = rev.invoke;
console.log(add_rev(5, 6));
rev.revoke();
console.log(add_rev(6, 8));
