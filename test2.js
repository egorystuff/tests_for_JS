// var sheepCounted = 0;
// while (sheepCounted <= 10) {
//   console.log('Посчитано овец:' + sheepCounted + '!');
//   sheepCounted++;
// }
// for (let sheepCounted = 0; sheepCounted <= 10; sheepCounted++) {
//   console.log('Посчитано овец' + sheepCounted + '!');
// }
// console.log('Хрррррррррррр-ппсссс!!!');

var animals = ['лев', 'фламинго', 'белый медведь', 'удав'];
for (var i = 0; i < animals.length; i++) {
  console.log('В этом зоопарке есть ' + animals[i] + '.');
}

// var name = 'Ник';
// for (var i = 0; i < name.length; i++) {
//   console.log('В моем имени есть буква ' + name[i] + '.');
// }

// for (let x = 2; x <= 1024; x = x * 2) {
//   console.log(x);
// }

// var y = 3;
// while (y <= 1000) {
//   console.log(y);
//   y = y * 3;
// }

var animals = ['Кот', 'Рыба', 'Лемур', 'Комодский варан'];
console.log(animals);

for (let i = 0; i < animals.length; i++) {
  animals[i] = animals[i] + ' -прекрасное животное';
}
console.log(animals);

var alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
var randomString = '';
while (randomString.length <= 25) {
  var letter = Math.floor(Math.random() * alphabet.length);
  randomString += alphabet[letter];
}
console.log(randomString);
