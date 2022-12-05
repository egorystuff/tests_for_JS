// let name = prompt('Как вас зовут?');
// console.log('Привет, ' + name);

// let likesCats = confirm('Тебе нравятся кошки?');
// if (likesCats) {
//   console.log('Ты классная кошка!');
// } else {
//   console.log('Что ж, не проблема, все равно ты молодец!');
// }

// alert('JS это очень здорово!');

let words = ['программа', 'макака', 'прекрасный', 'оладушек'];
let word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = '_';
}
let remainingLetters = word.length;
alert(answerArray.join(' '));
let guess = prompt('Угадайте букву или нажмите отмена для выхода из игры.');
while (remainingLetters > 0) {
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert('Пожалуйста, введите только одну букву');
  } else {
    // Обновляем состояние игры
  }
}

console.log(answerArray);
