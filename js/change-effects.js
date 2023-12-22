import {photoPreview} from './change-scale.js';
const SET_OF_FILTERS = [
  {
    name: 'none',
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

let clickSet = SET_OF_FILTERS[0];

const levelEffect = document.querySelector('.effect-level__value');
const sliderElem = document.querySelector('.effect-level__slider');
const effectsBlock = document.querySelector('.effects');
const sliderSetContainer = document.querySelector('.img-upload__effect-level');

function hideSlaiderContainer () {sliderSetContainer.classList.add('hidden');}

function showSlaiderContainer () {sliderSetContainer.classList.remove('hidden');}

const templateSlider = ()=> sliderElem.noUiSlider.updateOptions({
  range: {
    min: clickSet.min,
    max: clickSet.max,
  },
  step: clickSet.step,
  start: clickSet.max,
});

function recetEffects () {
  clickSet = SET_OF_FILTERS[0];
  templateSlider();
}

const onAddsClassEffect = (evt) => {
  clickSet = SET_OF_FILTERS.find((set)=> set.name === evt.target.value);
  photoPreview.className = `effects__preview--${clickSet.name}`;
  templateSlider();
};

noUiSlider.create(sliderElem, {
  range:
  {
    min: SET_OF_FILTERS[0].min,
    max: SET_OF_FILTERS[0].max,
  },
  start: SET_OF_FILTERS[0].min,
  step: SET_OF_FILTERS[0].step,
  connect: 'lower',
});

const onChangeLevelEffect = () => {
  const sliderLevel = sliderElem.noUiSlider.get() ;
  if(clickSet === SET_OF_FILTERS[0]){
    photoPreview.style.filter = SET_OF_FILTERS[0].style;
    hideSlaiderContainer();
  }
  else
  {
    photoPreview.style.filter = `${clickSet.style}(${sliderLevel}${clickSet.unit})`;
    levelEffect.value = sliderLevel;
    showSlaiderContainer();
  }
};

effectsBlock.addEventListener('change', onAddsClassEffect);
sliderElem.noUiSlider.on('update', onChangeLevelEffect);

export {recetEffects};
