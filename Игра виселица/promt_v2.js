var pickWord = function () {
  // Возвращает случайно выбранное слово
  var words = [
    'изюм',
    // 'программа',
    // 'макака',
    // 'прекрасный',
    // 'оладушек',
    // 'балалайка',
    // 'анисковка',
  ];

  return words[Math.floor(Math.random() * words.length)];
};

var setupAnswerArray = function (word) {
  // Возвращает итоговый массив для заданного слова word
  var answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = '_';
  }

  return answerArray;
};

var showPlayerProgress = function (answerArray) {
  // С помощью alert отображает текущее состояние игры
  alert(answerArray.join(' '));
};

var getGuess = function () {
  // Запрашивает ответ игрока с помощью prompt
  if (attemt === 0) {
    alert('Попытки закончились. Конец игры!');
    return false;
  } else {
    return prompt('Введите букву, или нажмите Отмена для выхода из игры.');
  }
};

var updateGameState = function (guess, word, answerArray) {
  // Обновляет answerArray согласно ответу игрока (guess)
  // возвращает число, обозначающее, сколько раз буква guess
  // встречается в слове, чтобы можно было обновить значение
  // remainingLetters
  var appearances = 0;
  for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      answerArray[j] = guess;
      appearances++;
    }
  }
  return appearances;
};

var showAnswerAndCongratulatePlayer = function (answerArray) {
  // С помощью alert показывает игроку отгаданное слово
  // и поздравляет его с победой
  if (remainingLetters === 0) {
    alert(answerArray.join(' '));
    alert('Отлично! Было загадано слово "' + word + '"  МОИ ПОЗДРАВЛЕНИЯ!!!');
  } else {
    alert('Слово не отгадано, вы проиграли!!! ХАХАХАХАХА');
  }
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
  attemt--;
  alert('У вас осталось ' + attemt + ' попыток');
  // guess: ответ игрока
  var guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert('Пожалуйста, введите одиночную букву.');
  } else {
    // Преобразуем заглавные буквы в строчные
    guess = guess.toLowerCase();
    for (let j = 0; j < word.length; j++) {
      if (answerArray[j] === guess) {
        alert('Буква уже отгадана. Попробуйте другую букву');
        break;
      } else if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
    // correctGuesses: количество открытых букв
    // var correctGuesses = updateGameState(guess, word, answerArray);
    // remainingLetters -= correctGuesses;
  }
}

showAnswerAndCongratulatePlayer(answerArray);
