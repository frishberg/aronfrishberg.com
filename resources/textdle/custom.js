function generateLink() {
    var result = ""
    word = document.getElementById("input").value
    for (var i=0; i<word.length; i++) {
        var currentLetter = word.substring(i, i+1)
        var numCode = ((currentLetter.charCodeAt(0) - 96) + 17) % 26
        result += (String.fromCharCode(96 + numCode))
    }
    document.getElementById("output").setAttribute('value',"https://aronfrishberg.com/resources/textdle/index.html?" + result);
}
function copyToClipboard() {
  var copyText = document.getElementById("output");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
}
function decryptLink() {
    var result = ""
    word = document.getElementById("input").value
    for (var i=0; i<word.length; i++) {
        var currentLetter = word.substring(i, i+1)
        var numCode = ((currentLetter.charCodeAt(0) - 96) + 9) % 26
        if (numCode==0) {numCode=26}
        result+=String.fromCharCode(96 + numCode)
    }
    return(result)
}