// let name = prompt('Как вас зовут?');
// console.log('Привет, ' + name);

// let likesCats = confirm('Тебе нравятся кошки?');
// if (likesCats) {
//   console.log('Ты классная кошка!');
// } else {
//   console.log('Что ж, не проблема, все равно ты молодец!');
// }

// alert('JS это очень здорово!');

let words = [
  'программа',
  'макака',
  'прекрасный',
  'оладушек',
  'балалайка',
  'изюм',
  'анисковка',
];

// выбираем случайное слово
let word = words[Math.floor(Math.random() * words.length)];

// создаем итоговый массив
let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = '_';
}

let remainingLetters = word.length;

// игровой цикл
while (remainingLetters > 0) {
  // показываем состояние игры
  alert(answerArray.join(' '));

  // запрашиваем варианты ответа
  var guess = prompt('Угадайте букву или нажмите Отмена для выхода из игры.');

  // Преобразуем заглавные буквы в строчные
  guess = guess.toLowerCase();

  if (guess === null) {
    // выходим из игрового цикла
    break;
  } else if (guess.length !== 1) {
    alert('Пожалуйста, введите только одну букву');
  } else {
    // Обновляем состояние игры
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
  // конец игрового цикла
}

alert(answerArray.join(' '));
alert('Отлично! Было загадано слово "' + word + '"');
// console.log(answerArray);
