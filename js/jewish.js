var currentVal = 0
function alan(input) { //decrypter
  var temp = "";
  for (var i=0; i<input.length; i=i+2) {
    currentVal = Number(input.substring(i, i+2))
    temp+=(numberToLetter(currentVal/2))
  }
  return (temp)
}
var currentLetter = "";
function turing(input) { //encrypter
  input=input.replace(/\s/g, "_")
  var temp = "";
  for (var i=0; i<input.length; i++) {
    currentLetter = 2*letterToNumber(input.substring(i, i+1));
    temp+=currentLetter;
  }
  return(temp)
}
function letterToNumber(letter) {
  return(letter.charCodeAt(0) - 86)
}
function numberToLetter(number) {
  return(String.fromCharCode(86 + number))
}
function redirect(newURL) {
  window.location.href = newURL;
}