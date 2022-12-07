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
  if (array1.lenght != array2.lenght) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      array1[i] === array2[i];
    }
    return true;
  }
};

console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));
