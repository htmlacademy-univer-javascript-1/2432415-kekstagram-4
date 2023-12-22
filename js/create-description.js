import {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement} from './util.js';

import {generateCardsComments} from './create-comment.js';

const DESCRIPTIONS = [
  'Пляж',
  'Кот',
  'Каток',
  'Домик',
  'Бар',
  'Какая-то картинка',
  'Ещё одна картинка',
  'Крутая картинка',
  'Скучная картинка',
];

const COUNT_LIKES_MAX = 200;
const COUNT_LIKES_MIN = 15;
const COUNT_CARDS = 25;

const generateUrl = createRandomIdFromRangeGenerator(1, COUNT_CARDS);
const generateId = createRandomIdFromRangeGenerator(1, COUNT_CARDS);

const createDescription = () => ({
  id: generateId(),
  url: `photos/${generateUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(COUNT_LIKES_MIN, COUNT_LIKES_MAX),
  comments: generateCardsComments(),
});

const generateCardsDescription = () => Array.from({length: COUNT_CARDS}, createDescription);

export {generateCardsDescription};
