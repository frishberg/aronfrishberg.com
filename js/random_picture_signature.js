var num_of_pics = 3
var random1 = Math.floor(Math.random() * (num_of_pics));
var num_of_signatures = 9
var random2 = Math.floor(Math.random() * (num_of_signatures));

window.onload = function() {
    if (sessionStorage.getItem('picture')==null) {
        document.getElementById("thejewhimself").src="../img/aron"+random1+".jpg";
        sessionStorage.setItem('picture', random1);
    }
    else {
        document.getElementById("thejewhimself").src="../img/aron"+sessionStorage.getItem('picture')+".jpg";
    }
    if (sessionStorage.getItem('signature')==null) {
        document.getElementById("signature").src="../img/signatures/"+random2+".png";
        sessionStorage.setItem('signature', random2);
    }
    else {
        document.getElementById("signature").src="../img/signatures/"+sessionStorage.getItem('signature')+".png";
    }
};