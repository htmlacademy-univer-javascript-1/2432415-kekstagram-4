const newBody = document.querySelector('body');
const bigPictureClose = document.querySelector('.big-picture__cancel');
const bigPictureContainer = document.querySelector('.big-picture');

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
};

function openBigPicture () {
  bigPictureContainer.classList.remove('hidden');
  newBody.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeBigPicture () {
  bigPictureContainer.classList.add('hidden');
  newBody.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

bigPictureClose.addEventListener('click', closeBigPicture);

export {openBigPicture, bigPictureContainer};
