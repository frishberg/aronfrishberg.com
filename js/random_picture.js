var num_of_pics = 4
var random = Math.floor(Math.random() * (num_of_pics));
window.onload = function() {
    if (sessionStorage.getItem('picture')==null) {
        document.getElementById("thejewhimself").src="../img/aron"+random+".jpg";
        sessionStorage.setItem('picture', random);
    }
    else {
        document.getElementById("thejewhimself").src="../img/aron"+sessionStorage.getItem('picture')+".jpg";
    }
};