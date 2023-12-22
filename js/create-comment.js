import {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement} from './util.js';

const MESSAGE_LIST = [
  'Всё отлично!',,
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
];

const NAMES_LIST = [
  'Никита',
  'Олег',
  'Порфирий',
];

const generateIdAvatar = createRandomIdFromRangeGenerator(1, 300);

const createComments = ()=>({
  id: generateIdAvatar(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGE_LIST),
  name: getRandomArrayElement(NAMES_LIST),
});

const generateCardsComments = () => Array.from({length: 12}, createComments);

export {generateCardsComments};
