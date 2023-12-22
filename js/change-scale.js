const STEP_SCALE = 25;
const MIN_SCALE = 25;
const DEFAULT_SCALE = 100;

const photoPreview = document.querySelector('.img-upload__preview > img ');
const buttonPhotoSmall = document.querySelector('.scale__control--smaller');
const buttonPhotoBig = document.querySelector('.scale__control--bigger');
const scaleOutput = document.querySelector('.scale__control--value');

let scaleNumber = parseInt(scaleOutput.value, 10);

function onChangeScale (volue) {
  scaleOutput.value = `${volue}%`;
  photoPreview.style.transform = `scale(${ volue/100})`;
}

function onIncreaseStepScale () {
  if(scaleNumber<DEFAULT_SCALE){
    scaleNumber += STEP_SCALE;
    onChangeScale(scaleNumber);}
}

function onDecreaseStepScale () {
  if(scaleNumber>MIN_SCALE){
    scaleNumber -= STEP_SCALE;
    onChangeScale(scaleNumber);}
}

function onReturnDafaultScale () {
  scaleNumber = DEFAULT_SCALE;
  onChangeScale(scaleNumber);
}

buttonPhotoBig.addEventListener('click', onIncreaseStepScale);
buttonPhotoSmall.addEventListener('click', onDecreaseStepScale);

export {onReturnDafaultScale, photoPreview};
