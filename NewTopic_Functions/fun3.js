//упражнение 1
var add = function (number1, number2) {
  return number1 + number2;
};

var multiply = function (number3, number4) {
  return number3 * number4;
};
var result = multiply(36325, 9824) + add(777, 0);
console.log(result);

//упражнение 2
var areArraysSame = function (array1, array2) {
  while (array1 !== array2) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {}
};
