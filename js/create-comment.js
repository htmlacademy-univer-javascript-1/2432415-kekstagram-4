import {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement} from './util.js';

const NAMES_LIST = [
  'Никита',
  'Олег',
  'Порфирий'
];

const MESSAGES_LIST = [
  'Всё отлично!',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.'
];

const generateAvatarId = createRandomIdFromRangeGenerator(1, 300);
const createComments = ()=>({
  id: generateAvatarId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES_LIST),
  name: getRandomArrayElement(NAMES_LIST),
});

const generateCardsComments = () => Array.from({length: 12}, createComments);

export {generateCardsComments};
