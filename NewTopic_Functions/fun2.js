// выбираем случаное слово из массива
var pickRandomWord = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};

var randomWords = ['Планета', 'Червяк', 'Цветок', 'Компьютер'];

console.log(pickRandomWord(randomWords));
console.log(pickRandomWord(['Чарли', 'Радж', 'Николь', 'Кейт', 'Сэнди']));

//генератор случайных дразнилок

var generateRandomInsult = function (howManyTimes) {
  for (var i = 0; i < howManyTimes; i++) {
    var randomBodyParts = ['глаз', 'нос', 'череп'];
    var randomAdjectives = ['вонючая', 'унылая', 'дурацкая'];
    var randomWords = ['муха', 'выдра', 'дубина', 'мартышка', 'крыса'];
    // Соединяем случайные строки в предложение:
    var randomString =
      'У тебя ' +
      pickRandomWord(randomBodyParts) +
      ' словно ' +
      pickRandomWord(randomAdjectives) +
      ' ' +
      pickRandomWord(randomWords) +
      ' !!!';
    return randomString;
  }
};

console.log(generateRandomInsult(5));
