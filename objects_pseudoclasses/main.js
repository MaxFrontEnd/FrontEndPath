// Создани объектов
// Есть 4 разных способа создавать объекты


// Создаем наш объект при помощи new
var MyObject = new Object();
// Переменные
MyObject.id = 5; //Число
MyObject.name = "Sample"; //Строка
// Функции
MyObject.getName = function()
{
    return this.name;
}

// Минус данного способа заключается в том, что вы можете работать только
// с одним вновь созданным объектом.
// Используем наш объект
alert(MyObject.getName());


// Литеральная нотация объектами

//Создаем наш объект с использованием литеральной нотации
MyObject = {
    id : 1,
    name : "Sample",
    boolval : true,
    getName : function()
    {
        return this.name;
    }
}


//Как видите, это довольно просто.
alert(MyObject.getName());

// Конструкторы объектов
// Создается конструктор объектами

let HeIsConstr = function(id) {
  this.id = id;
}

// Создаем два независимых объекта
let firstEx = HeIsConstr(id);
let secondEx = HeIsConstr(id);

// ассоциативные массивы

Подобный метод будет полезен упорядочивания большого числа однотипных объектов.


var MyObject = new Number();
MyObject["id"] = 5;
MyObject["name"] = "SampleName";


// Для обхода таких объектов можно использовать такой цикл:


for (MyElement in MyObject)
{
    //Код обхода
    //В MyElement - идентификатор записи
    //В MyObject[MyElement] - содержание записи
}

// Cоздание объектов с открытыми м закрытыми свойствами
// 1. Создать объект одним из имеющихся способов

function constructor(spec) {
  // Передаем в наш коструктор вместо списка
  // параметров - объект. Что поможет в дальнейшем
  let that = otherMaker(spec), // Наследуем другой объект передавая ему наш spec
  member,
  method = function(){
    // Доступ ко всем атрибутам внешнего класса spec, memeber, method
  };
  that.method = method;
  return that;
}
