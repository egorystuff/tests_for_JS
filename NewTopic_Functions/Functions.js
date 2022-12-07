//просто пишет текст
var ourFirstFunction = function () {
  console.log('Привет, мир!');
};

//функция с аргументом
var sayHelloTo = function (name) {
  console.log('Привет, ' + name + '!');
};

//функция с циклом, повторяет цикл столько раз, сколько укажешь в аргументе при вызове функции
var drawCats = function (howManyTimes) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + ' =^.^=');
  }
};

//функция с двумя аргументами. Функция printMultipleTimes печатает строку, переданную в аргументе whatToDraw столько раз, сколько указано в аргументе howManyTimes. Второй аргумент сообщает функции, что печатать, а первый — сколько раз это нужно печатать.
var printMultipleTimes = function (howManyTimes, whatToDraw) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + ' ' + whatToDraw);
  }
};
//функция возвращает значение
var double = function (number) {
  return number * 2;
};

console.log(double(5) + double(6));
