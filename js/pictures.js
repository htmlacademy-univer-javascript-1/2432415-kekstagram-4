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




const bigPhotoElement = document.querySelector('.big-picture');

const bigPhotoClose = bigPhotoElement.querySelector('.big-picture__cancel');

const imageElem = bigPhotoElement.querySelector('.big-picture__img img');
const descriptionElem = bigPhotoElement.querySelector('.social__caption');
const likesElem = bigPhotoElement.querySelector('.likes-count');

const commentsCount = bigPhotoElement.querySelector('.comments-count');
const commentsButton = bigPhotoElement.querySelector('.social__comments-loader');
const commentsList = bigPhotoElement.querySelector('.social__comments');
const commentsCurrent = bigPhotoElement.querySelector('.comments-current');
const commentTemplate = bigPhotoElement.querySelector('.social__comment');

var countComments = 0;
var commentsLength = 0;
var comments;

const fillCommentData = (comment) => {
  const commentClone = commentTemplate.cloneNode(true);
  commentClone.querySelector('.social__picture').src = comment.avatar;
  commentClone.querySelector('.social__picture').alt = comment.name;
  commentClone.querySelector('.social__text').textContent = comment.message;

  return commentClone;
};

const fillCommentsCurrent = (counter) => {
  commentsCurrent.textContent = counter;
};

const removeLoadCommentsButton = () => commentsButton.classList.add('hidden');

const renderComments = (comments) => {
  if (!comments) {
    commentsLength = comments.length;
    comments = [...comments];
  }

  const renderingComments = comments.splice(0, RENDER_COMMENTS < comments.length
    ? RENDER_COMMENTS : comments.length);

  renderingComments.forEach((comment) => {
    commentsList.append(fillCommentData(comment));
    countComments++;
  });

  fillCommentsCurrent(countComments);
  if (countComments === commentsLength) { removeLoadCommentsButton(); }
};

const onBigPhotoCloseButton = (evt) => {
  evt.preventDefault();
  hiddensBigPhoto();
};
const showBigPhotoElement = () => {
  countComments = 0;
  comments = '';
  bigPhotoElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKey);
};


const hiddensBigPhoto = () => {
  bigPhotoElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  commentsButton.classList.remove('hidden');
  document.removeEventListener('keydown', onDocumentKey);
};

const onLoadCommentsButton = (evt) => {
  evt.preventDefault();
  commentsLength = comments.length;
  comments = [...comments];
};

function onDocumentKey(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();

    hiddensBigPhoto();
  }
}

const fillPhoto = (photo) => {
  imageElem.src = photo.url;
  descriptionElem.textContent = photo.description;
  likesElem.textContent = photo.likes;
  commentsCount.textContent = photo.comments.length;
  commentsList.innerHTML = '';
  renderComments(photo.comments);
};

const BigPhotoClick = () => {
  commentsButton.addEventListener('click', onLoadCommentsButton);
  bigPhotoClose.addEventListener('click', onBigPhotoCloseButton);
};

const showBigPhoto = (photo) => {
  showBigPhotoElement();
  fillPhoto(photo);
};




export {showBigPhoto, BigPhotoClick};
