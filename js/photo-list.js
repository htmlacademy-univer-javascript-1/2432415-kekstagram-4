import {picturesContainer, renderCards} from './draw-thumbnail.js';
import {debounce} from './util.js';

const filtersContainer = document.querySelector('.img-filters');
const showFiltersContainer = () => filtersContainer.classList.remove('img-filters--inactive');
const PPORTION_PFOTOS = 10;

const cleanPicturesContainer = (container) => {
  container.querySelectorAll('.picture').forEach((element)=>element.remove());
};

const cleanButtonStatus = () => {
  const allButtons = filtersContainer.querySelectorAll('.img-filters__button');
  allButtons.forEach((element)=>element.classList.remove('img-filters__button--active'));
};

const debouncedRenderCards = debounce(renderCards);
const debouncedCleansPicturesContainer = debounce(cleanPicturesContainer);

let filteredData = [];

const selectFilter = (data) => {
  filtersContainer.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('img-filters__button')){
      cleanButtonStatus();
      evt.target.classList.add('img-filters__button--active');
      if(evt.target.id === 'filter-random'){ filteredData = data.slice().sort(() => Math.random() - 0.5).slice(0, PPORTION_PFOTOS); }
      else if(evt.target.id === 'filter-discussed'){ filteredData = data.slice().sort((picA,picB) => picB.comments.length - picA.comments.length); }
      else if(evt.target.id === 'filter-default'){filteredData = data;}
      debouncedCleansPicturesContainer(picturesContainer);
      debouncedRenderCards(filteredData);
    }
  });
};

export {showFiltersContainer, selectFilter};
