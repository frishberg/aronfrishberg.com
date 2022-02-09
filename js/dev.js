function college() {
    redirect("resources/collegestatus.html")
}
function github() {
    redirect("https://github.com/TheA-ron/aronfrishberg.com")
}
function regenerate() {
    var random1 = Math.floor(Math.random() * (num_of_pics));
    var random2 = Math.floor(Math.random() * (num_of_signatures));
    document.getElementById("thejewhimself").src="../img/aron/"+random1+".jpg";
    sessionStorage.setItem('picture', random1);
    document.getElementById("signature").src="../img/signatures/"+random2+".png";
    sessionStorage.setItem('signature', random2);
}
function sildeshow() {
    setInterval(function () {regenerate()}, 2000);
}
function slideshow(time) {
    setInterval(function () {regenerate()}, time);
}