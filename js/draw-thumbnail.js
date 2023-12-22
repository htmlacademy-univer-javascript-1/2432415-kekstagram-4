import {openBigPictureContainer, bigPictureContainer} from './show-large-photos.js';

const PORTION_COMMENTS = 5;

const picturesContainer = document.querySelector('.pictures');

const thumbnailTemplete = document.querySelector('#picture').content.querySelector('.picture');
const thumbnailBox = document.createDocumentFragment();

const commentstBlock = document.querySelector('.social__comments');
const commentPattern = commentstBlock.querySelector('.social__comment');

const allCoutns = bigPictureContainer.querySelector('.social__comment-count');

const allLoaders = bigPictureContainer.querySelector('.comments-loader');

const renderCards = (thumbnailArray) => {
  thumbnailArray.forEach((item) => {
    const newThumbnail = thumbnailTemplete.cloneNode(true);

    newThumbnail.querySelector('.picture__img').src = item.url;
    newThumbnail.querySelector('.picture__img').alt = item.description;
    newThumbnail.querySelector('.picture__likes').textContent = item.likes;
    newThumbnail.querySelector('.picture__comments').textContent = item.comments.length;
    newThumbnail.dataset.newThumbnailId = item.id;
    thumbnailBox.appendChild(newThumbnail);

    newThumbnail.addEventListener('click', () => {
      openBigPictureContainer();
      bigPictureContainer.querySelector('.big-picture__img > img').src = newThumbnail.querySelector('.picture__img').src;
      bigPictureContainer.querySelector('.likes-count').textContent = newThumbnail.querySelector('.picture__likes').textContent;
      bigPictureContainer.querySelector('.comments-count').textContent = newThumbnail.querySelector('.picture__comments').textContent;
      bigPictureContainer.querySelector('.social__caption').textContent = newThumbnail.querySelector('.picture__img').alt;

      const sameId = thumbnailArray.find((thumbnail)=> thumbnail.id === +newThumbnail.dataset.newThumbnailId);
      let quantityComments = 0;
      function addPortionComments () {
        quantityComments += PORTION_COMMENTS;
        commentstBlock.innerHTML = '';
        let addedComments = 0;

        if(sameId){
          for (let i = 0 ; i < quantityComments ; i++) {
            const newComment = commentPattern.cloneNode(true);

            if(quantityComments >= sameId.comments.length){
              bigPictureContainer.querySelector('.comments-loader').classList.add('hidden');
              quantityComments = sameId.comments.length;
            }
            else{bigPictureContainer.querySelector('.comments-loader').classList.remove('hidden');}

            newComment.querySelector('.social__picture').src = sameId.comments[i].avatar;
            newComment.querySelector('.social__picture').alt = sameId.comments[i].name;
            newComment.querySelector('.social__text').textContent = sameId.comments[i].message;
            commentstBlock.appendChild(newComment);

            addedComments ++;
            allCoutns.innerHTML = `${addedComments} из <span class="comments-count">${sameId.comments.length}</span> комментариев`;
          }
        }
      }

      addPortionComments();
      allLoaders.addEventListener('click', addPortionComments);
    });
  });

  picturesContainer.appendChild(thumbnailBox);
};

export {renderCards};
