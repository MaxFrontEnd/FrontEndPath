// // MODULE Pattern
//
// const inArray = (function(){
//   const arr = [12, 23, 33, 41, 1, 23];
//
//   function getMax() {
//     return Math.max.apply(null, arr);
//   }
//
//   function getMin() {
//     return Math.min.apply(null, arr);
//   }
//
//   return {
//     max: getMax,
//     min: getMin
//   }
// })();
//
//
// //console.log(inArray.max());
//
// // Singleton Patterns
//
// const singleton = (function(){
//   let instance;
//
//   class Ins{
//     constructor(name, obj){
//       this.name = name;
//       this.obj = obj;
//     }
//   }
//   function createInstance() {
//     const obj = new Ins('Max', 'big');
//     return obj;
//   }
//
//   return {
//     getInstance: function() {
//       if(!instance) {
//         instance = createInstance();
//       }
//       return instance;
//     }
//   }
// })();
//
// max1 = singleton.getInstance();
// max2 = singleton.getInstance();
//
// //console.log(max1 === max2);
//
// // Factory Pattern
//
// const FactoryMember = function() {
//   let instance;
//   this.createMember = function(name, type) {
//     if(type === 'standart') {
//       instance = new StandartMember(name);
//     } else if (type === 'minimal') {
//       instance = new MinimalMember(name);
//     } else if (type === 'maximal') {
//       instance = new MaximalMember(name);
//     }
//
//     instance.type = type;
//     instance.define = function() {
//       console.log(`${this.name} [${this.type}] ${this.cost}`);
//     }
//     return instance;
//   }
// }
//
// const MinimalMember = function(name) {
//   this.name = name;
//   this.cost = '5$';
// }
// const MaximalMember = function(name) {
//   this.name = name;
//   this.cost = '20$';
// }
// const StandartMember = function(name) {
//   this.name = name;
//   this.cost = '10$';
// }
//
// const members = [];
// const factory = new FactoryMember();
//
// members.push(factory.createMember('max', 'standart'));
// members.push(factory.createMember('Andy', 'minimal'));
// members.push(factory.createMember('max', 'maximal'));
//
// members.forEach(member => {
//   member.define();
// });
//
// console.log(members);


// Observer Pattern

// class EventObserv {
//   // Создаем в классе массив с событиями при создании нового экземпляр.
//   constructor(){
//     this.observers = [];
//   }
//
//   addNewObserv(fn) {
//     this.observers.push(fn);
//   }
//
//   removeObserv(fn) {
//     console.log(this.observers);
//     this.observers = this.observers.filter(subscriber => {
//       subscriber !== fn;
//       //console.log(this.observers);
//     });
//     console.log(this.observers);
//   }
//
//   broadcast(data) {
//     this.observers.forEach(subscriber => {
//       subscriber(data);
//     });
//   }
// }
//
// const observ = new EventObserv();
//
// message1 = 'new subscribe is fired';
// message2 = '3 subscribe is fired';
// message3 = '4 subscribe is fired';
//
// observ.addNewObserv(data => {
//   console.log(message1, data);
// });
// observ.addNewObserv(data => {
//   console.log(message3, data);
// });
// observ.addNewObserv(data => {
//   console.log(message2, data);
// });
//
// observ.broadcast({someData: 'i,m change'});
//
// observ.removeObserv(data => {
//   console.log(message3, data);
// });
//
// observ.broadcast({someData: 'i,m change again'});


// WORD COUNT Observer

// wordcount function

// const assert = require('assert');
//
// const wordCount = (text) => {
//   text ? text.trim().split(/\s+/).length : 0;
// }

// //UNIT TEST
//
// const words = 'Heloo is there are any    one \n\n here    ';
//
// const count = wordCount(words);
//
// assert.strictEqual(count, 7);

// UI
const container = document.querySelector('.container');
const p1 = document.createElement('p');
p1.classList.add('p1');
const p2 = document.createElement('p');
p2.classList.add('p2');

container.appendChild(p1);
container.appendChild(p2);


// Observer constructor
function ObservEvents() {
  this.observersArray = [];

  this.arrayLength = function(){
    console.log(this.observersArray.length);
    console.log(this.observersArray[0]);
  }
  this.addObserver = function(fn) {
    this.observersArray.push(fn);
  }

  this.removeObserver = function(fn) {
    this.observersArray.forEach((item, index) => {
      if(item === fn) {
        this.observersArray.splice(index, 1);
      }
    });
  }

  this.broadcast = function(data) {
    this.observersArray.forEach(observer => observer(data));
  }

}



// Functionality

const observer = new ObservEvents();


const showp1 = function(data) {
  document.querySelector('.p1').innerText = data;
}

const showp2 = function(data) {
  let len = data.length;
  document.querySelector('.p2').innerText = len;
}

observer.addObserver(showp1);
//console.log(showp1);
observer.addObserver(showp2);
//observer.removeObserver(showp1);
observer.arrayLength();
const textArea = document.getElementById('textA');
textArea.addEventListener('keyup', () => observer.broadcast(textArea.value));
//Init
