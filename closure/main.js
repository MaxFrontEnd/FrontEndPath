// Задача вернуть строку соответствующую полученному в функции числу
// Проблема в том num_arr глобальная переменная и если в системе случайным
// образом будет еще одна переменная с именем name, то скорее всего будет
// конфликт, что приведет к ошибке.

// Проблема с глобальной переменной
let num_arr = ['zero', 'one', 'two', 'three', 'four', 'five',
              'six', 'seven', 'eight', 'nine', 'ten'];

digit_string_conflict = function(n) {
  return num_arr[n];
}




// другой способ который помогает избежать проблемы с глобальной переменной,
// одако, проблема в том что каждый раз когда мы обращаемся к функции, создается
// новый масив, в этот масив снова помещаются данные, что приводит к медленой
// работе. Так как мы работаем с браузерами то скорость отображения данных очень
// важна


// Проблема с производительностью
let digit_string_slow = function(n) {
  let num_arr = ['zero', 'one', 'two', 'three', 'four', 'five',
                'six', 'seven', 'eight', 'nine', 'ten'];
  return num_arr[n];
}

// метод с замыканием. Смысл в том что мы создаем функцию, которая в свою
// очередь возвращает функцию у которой есть доступ ко всем аргументам
// внешней функции и тут-же ее вызываем.

let digit_string_closure = (function() {
  let num_arr = ['zero', 'one', 'two', 'three', 'four', 'five',
                'six', 'seven', 'eight', 'nine', 'ten'];
  return function (n){
    return num_arr[n];
  };
}());

console.log(digit_string_closure(4));

//функция закрашивает елемент на странице в необольшом отрезке времени
// Идея в том что внутренняя функция step имеет доступ к елементу дом модели
// и ее поиск елемента не приходится вызывать снова и снова, что привело бы к
// потери производительности

let color_element = function(id) {
  let dom = document.getElementById(id);
  level = 15
  function step() {
    let h = level.toString(16);
    console.log(h);
    dom.style.backgroundColor = "#FFFF" + h + h;
    console.log(dom.style.backgroundColor);
    if (level > 0){
      level = level - 1;
      setTimeout(step, 200);
    }
  }
  setTimeout(step, 100);
}

color_element("box");
