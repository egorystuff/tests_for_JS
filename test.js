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
    format: 'Blu-ray',
  },
};

console.log(Object.keys(movies));
