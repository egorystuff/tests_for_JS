console.log('oleg');

var movies = {
  'В поисках Немо': {
    releaseDate: 2003,
    duration: 100,
    actors: ['Альберт Брукс', 'Эллен Дедженерес', 'Александр Гоулд'],
    format: 'DVD',
  },
  'Звездные войны: Эпизод VI — Возвращение джедая': {
    releaseDate: 1983,
    duration: 134,
    actors: ['Марк Хэмилл', 'Харрисон Форд', 'Кэрри Фишер'],
    format: 'DVD',
  },
  'Гарри Поттер и Кубок огня': {
    releaseDate: 2005,
    duration: 157,
    actors: ['Дэниел Рэдклифф', 'Эмма Уотсон', 'Руперт Гринт'],
    format: 'Blu-ra',
  },
};

console.log(Object.keys(movies));

var cars = {
  releaseDate: 2006,
  duration: 117,
  actors: ['Оуэн Уилсон', 'Бонни Хант', 'Пол Ньюман'],
  format: 'Blu-ray',
};
movies['Тачки'] = cars;

console.log(Object.keys(movies));
