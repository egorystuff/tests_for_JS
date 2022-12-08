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
('use strict');
var areArraysSame = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (var j = 0; j < arr1.length; j++) {
    if (arr1[j] !== arr2[j]) {
      return false;
    }
  }
  return true;
};

console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
