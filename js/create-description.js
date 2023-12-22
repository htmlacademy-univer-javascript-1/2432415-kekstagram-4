import {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement} from './util.js';
import {generateCardsComments} from './create-comment.js';

const generateId = createRandomIdFromRangeGenerator(1, COUNT_CARDS);
const generateUrl = createRandomIdFromRangeGenerator(1, COUNT_CARDS);

const DESCRIPTION_LIST = [
  'Море',
  'Пляж',
  'Дом',
  'Кот',
  'Какая-то картинка',
  'Ещё одна картинка',
  'Крутая картинка',
  'Скучная картинка'
];

const COUNT_CARDS = 25;
const COUNT_LIKES_MAX = 200;
const COUNT_LIKES_MIN = 15;

const createOneDescription = () => ({
  id: generateId(),
  url: `photos/${generateUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION_LIST),
  likes: getRandomInteger(COUNT_LIKES_MIN, COUNT_LIKES_MAX),
  comments: generateCardsComments(),
});

const generateCardsDescription = () => Array.from({length: COUNT_CARDS}, createOneDescription);

export {generateCardsDescription};
