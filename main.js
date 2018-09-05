// Задача вернуть строку соответствующую полученному в функции числу
// Проблема в том num_arr глобальная переменная и если в системе случайным
// образом будет еще одна переменная с именем name, то скорее всего будет
// конфликт, что приведет к ошибке.

// Проблема с глобальной переменной
let num_arr = ['zero', 'one', 'two', 'three', 'four', 'five',
              'six', 'seven', 'eight', 'nine', 'ten'];

digit_string_conflict = function (n){
  return num_arr[n];
}




// другой способ который помогает избежать проблемы с глобальной переменной,
// одако, проблема в том что каждый раз когда мы обращаемся к функции, создается
// новый масив, в этот масив снова помещаются данные, что приводит к медленой
// работе. Так как мы работаем с браузерами то скорость отображения данных очень
// важна


// Проблема с производительностью
let digit_string_slow = function (n){
  let num_arr = ['zero', 'one', 'two', 'three', 'four', 'five',
                'six', 'seven', 'eight', 'nine', 'ten'];
  return num_arr[n];
}

// метод с замыканием. Смысл в том что мы создаем функцию, которая в свою
// очередь возвращает функцию у которой есть доступ ко всем аргументам
// внешней функции и тут-же ее вызываем.

let digit_string_closure = (function (){
  let num_arr = ['zero', 'one', 'two', 'three', 'four', 'five',
                'six', 'seven', 'eight', 'nine', 'ten'];
  return function (n){
    return num_arr[n];
  };
}());

console.log(digit_string_closure(4));
