const STEP_SCALE = 25;
const MIN_SCALE = 25;
const SCALE_DEFAULT = 100;

const buttonPhotoBig = document.querySelector('.scale__control--bigger');
const buttonPhotoSmall = document.querySelector('.scale__control--smaller');
const photoPreview = document.querySelector('.img-upload__preview > img ');

const outputScale = document.querySelector('.scale__control--value');

let scaleNumber = parseInt(outputScale.value, 10);

function onChangeScale (volue) {
  outputScale.value = `${volue}%`;
  photoPreview.style.transform = `scale(${ volue / 100})`;
}

function onReturnDafaultScale () {
  scaleNumber = SCALE_DEFAULT;
  onChangeScale(scaleNumber);
}

function onDecreaseStepScale () {
  if(scaleNumber > MIN_SCALE){
    scaleNumber -= STEP_SCALE;
    onChangeScale(scaleNumber);
  }
}

function onIncreaseStepScale () {
  if(scaleNumber < SCALE_DEFAULT){
    scaleNumber += STEP_SCALE;
    onChangeScale(scaleNumber);
  }
}

buttonPhotoBig.addEventListener('click', onIncreaseStepScale);
buttonPhotoSmall.addEventListener('click', onDecreaseStepScale);

export {onReturnDafaultScale, photoPreview};
