function checkString (phrase, limit){
  if(phrase.length <= limit){
    return true;
  }return false;
}
checkString ('проверяемая строка', 10);

function checkPalindrome(phrase){
  const letters = [];
  let newPhrase;
  for (let i = 0; i <= phrase.length - 1; i++){

    letters.unshift(phrase[i]);
    newPhrase = letters.join('');
  }
  if(phrase.toLowerCase() === newPhrase.toLowerCase()){
    return true;
  }else{
    return false;
  }
}
checkPalindrome('ДовОд');

function checkNum(frase){
  let numbers = '';
  for(let i = 0; i <= frase.length - 1; i++){
    if(!isNaN(frase[i]) && frase[i] !== ' '){
      numbers += frase[i];
    }
  }
  if(numbers === ''){
    return NaN;
  }
  return numbers;
}
checkNum('а я томат');

function checkNumber(frase){
  let numbers = '';
  for(let i = 0; i <= frase.length - 1; i++){
    if(!Number.isNaN(parseInt(frase[i], 10))){
      numbers += frase[i];
    }
  }
  return parseInt(numbers, 10);
}
checkNumber('ECMAScript 2022');

function addsSimbol (string, limit, add){
  const realAdd = limit - string.length;
  if(realAdd <= 0){return string;}
  return add.slice(0, realAdd % add.length) + add.repeat(realAdd / add.length) + string;
}

addsSimbol ('qwerty', 4, '0');
