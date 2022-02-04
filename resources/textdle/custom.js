function generateLink() {
    word = document.getElementById("input").value
    document.getElementById("output").setAttribute('value',"https://aronfrishberg.com/resources/textdle/index.html?" + word);
}
function copyToClipboard() {
  var copyText = document.getElementById("output");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
}