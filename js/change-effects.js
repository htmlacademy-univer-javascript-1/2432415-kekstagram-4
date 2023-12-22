import {photoPreview} from './change-scale.js';

const SET_FILTERS = [
  {name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit:'',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit:'',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit:'',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 1 ,
    max: 100,
    step: 1,
    unit:'%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit:'px',

  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit:'',
  },
];

let clickedSet = SET_FILTERS[0];

const effectBlock = document.querySelector('.effects');
const sliderSetContainer = document.querySelector('.img-upload__effect-level');
const levelEffect = document.querySelector('.effect-level__value');
const sliderElem = document.querySelector('.effect-level__slider');

function hideSlaidContainer () {sliderSetContainer.classList.add('hidden');}
function showSlaidContainer () {sliderSetContainer.classList.remove('hidden');}

const templateSlider = ()=> sliderElem.noUiSlider.updateOptions({
  range: {
    min: clickedSet.min,
    max: clickedSet.max,},
  step: clickedSet.step,
  start: clickedSet.max,
});

const onAddsClassEffect = (evt) => {
  clickedSet = SET_FILTERS.find((set)=> set.name === evt.target.value);
  photoPreview.className = `effects__preview--${clickedSet.name}`;
  templateSlider();
};

function recetEffects () {
  clickedSet = SET_FILTERS[0];
  templateSlider();
}

noUiSlider.create(sliderElem, {
  range: {
    min: SET_FILTERS[0].min,
    max: SET_FILTERS[0].max,
  },
  start: SET_FILTERS[0].min,
  step: SET_FILTERS[0].step,
  connect: 'lower',
});

const onChangeLevelEffect = () => {
  const sliderLevel = sliderElem.noUiSlider.get() ;
  if(clickedSet === SET_FILTERS[0]){
    photoPreview.style.filter = SET_FILTERS[0].style;
    hideSlaidContainer();
  }
  else{
    photoPreview.style.filter = `${clickedSet.style}(${sliderLevel}${clickedSet.unit})`;
    levelEffect.value = sliderLevel;
    showSlaidContainer();
  }
};

effectBlock.addEventListener('change', onAddsClassEffect);
sliderElem.noUiSlider.on('update', onChangeLevelEffect);

export {recetEffects};
