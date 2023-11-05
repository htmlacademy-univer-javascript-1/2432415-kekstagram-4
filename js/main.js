const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const description = [
  'Какая-то картинка',
  'Ещё одна картинка',
  'Крутая картинка',
  'Скучная картинка'
]

const message = [
  'Всё отлично!',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.'
]

const names = [
  'Никита',
  'Олег',
  'Порфирий'
]

const createcomment = () => ({
  id: getRandomInteger(1,25),
  avatar: 'img/avatar-'+getRandomInteger(1,31)+'.svg',
  message: getRandomArrayElement(message),
  name: getRandomArrayElement(names),
});

const createObj = () => ({
  id: getRandomInteger(1,25),
  url: 'photos/'+getRandomInteger(1,25)+'.jpg',
  description: getRandomArrayElement(description),
  likes: getRandomInteger(15,250),
  comments: Array.from({length:getRandomInteger(0,30)}, createcomment())
});

const createArray = Array.from({length:25}, createObj() );
