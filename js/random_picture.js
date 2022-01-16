var num_of_pics = 4
var random = Math.floor(Math.random() * (num_of_pics));
window.onload = function() {
    if (sessionStorage.getItem('pic')==null) {
        document.getElementById("thejewhimself").src="../img/aron"+random+".jpg";
        sessionStorage.setItem('pic', random);
    }
    else {
        document.getElementById("thejewhimself").src="../img/aron"+sessionStorage.getItem('pic')+".jpg";
    }
};