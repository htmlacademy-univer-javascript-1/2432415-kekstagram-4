import {createArray} from './functions.js';

const element = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');

var fragment = document.createDocumentFragment();

const createPhoto = (photo) => {
  const photoCopy = photoTemplate.cloneNode(true);
  photoCopy.querySelector('.picture__img').src = photo.url;
  photoCopy.querySelector('.picture__img').alt = photo.description;
  photoCopy.querySelector('.picture__comments').textContent = photo.comments;
  photoCopy.querySelector('.picture__likes').textContent = photo.likes;
};

const photos = createArray().map(createPhoto)
fragment.append(createPhoto(photos));
element.append(fragment);
