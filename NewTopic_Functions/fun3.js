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
var areArraysSame = function (arr1, arr2) {
  if (arr1.lenght !== arr2.lenght) {
    return false;
  }

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4, 5]));
