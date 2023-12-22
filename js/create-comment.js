import {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement} from './util.js';

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра',
];

const NAMES = [
  'Никита',
  'Олег',
  'Порфирий',
];

const generateIdAvatar = createRandomIdFromRangeGenerator(1, 300);

const createComments = ()=>({
  id: generateIdAvatar(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const generateCardsComments = () => Array.from({length: 12}, createComments);

export {generateCardsComments};
