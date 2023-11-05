function  isStringLength (str, leng)  {
  if (str.length<=leng) return true
  return false
}

function  isPalindrome (str)  {
  str.trim()
  str.toLowerCase()
  for (let i =0; i < parseInt(str.length/2,10); i++) {
    if (str[i]!=str[-i]) {return false}
  }
  return true
}
