window.onload = function () {
    setTime();
}

function setTime() {
    document.getElementById("date-element").innerHTML = "CHICAGO, IL - " + new Date().toLocaleDateString("en-US", { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }) + " - SIX PAGES";
}

function setChessRatingandTime(ratingELementID, dateElementID) {
    var d = new Date();
    var date = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();
    document.getElementById(dateElementID).innerHTML = date;
    var url = "https://api.chess.com/pub/player/aronfrish/stats"
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            var rating = xhr.response.chess_rapid.last.rating;
            document.getElementById(ratingELementID).innerHTML = rating;
        } else {
            document.getElementById(ratingELementID).innerHTML = "Error retrieving";
        }
    };
    xhr.send();
}