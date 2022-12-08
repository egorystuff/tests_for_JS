let words = [
  'изюм',
  'программа',
  'макака',
  'прекрасный',
  'оладушек',
  'балалайка',
  'анисковка',
];

// Основные функции

var pickWord = function (words) {
  return words[Math.floor(Math.random() * words.length)];
  // Возвращает случайно выбранное слово
};

var setupAnswerArray = function (word) {
  let answerArray = [];
  for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_';
  }
  // Возвращает итоговый массив для заданного слова word
};

var showPlayerProgress = function (answerArray) {
  alert(answerArray.join(' '));
  attemt--;
  alert('У вас осталось ' + attemt + ' попыток');
  // С помощью alert отображает текущее состояние игры
};

var getGuess = function () {
  // Запрашивает ответ игрока с помощью prompt
};

var updateGameState = function (guess, word, answerArray) {
  // Обновляет answerArray согласно ответу игрока (guess)
  // возвращает число, обозначающее, сколько раз буква guess
  // встречается в слове, чтобы можно было обновить значение
  // remainingLetters
};

var showAnswerAndCongratulatePlayer = function (answerArray) {
  if (remainingLetters === 0) {
    alert(answerArray.join(' '));
    alert('Отлично! Было загадано слово "' + word + '"  МОИ ПОЗДРАВЛЕНИЯ!!!');
  } else {
    alert('Слово не отгадано, вы проиграли!!! ХАХАХАХАХА');
  }
  // С помощью alert показывает игроку отгаданное слово
  // и поздравляет его с победой
};

// word: загаданное слово
var word = pickWord();
// answerArray: итоговый массив
var answerArray = setupAnswerArray(word);
// remainingLetters: сколько букв осталось угадать
var remainingLetters = word.length;
let attemt = word.length + 3;
while (remainingLetters > 0 && attemt > 0) {
  showPlayerProgress(answerArray);
  // guess: ответ игрока
  var guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert('Пожалуйста, введите одиночную букву.');
  } else {
    // correctGuesses: количество открытых букв
    var correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
  }
}
showAnswerAndCongratulatePlayer(answerArray);
