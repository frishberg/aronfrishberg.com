window.onload = function () {
    setTime();
}

function setTime() {
    var d = new Date();
    var longDate = d.toLocaleDateString("en-US", { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

    var topStrip = document.getElementById("top-strip");
    if (topStrip) {
        var vol = toRoman(d.getFullYear() - 2019);
        var issue = getWeekNumber(d);
        var baseLine = "Chicago, Illinois &middot; " + longDate + " &middot; Vol. " + vol + ", No. " + issue;
        topStrip.innerHTML = baseLine;
        fetchWeather().then(function (w) {
            if (w) topStrip.innerHTML = baseLine + " &middot; " + w;
        });
    }

    var leadDate = document.getElementById("lead-date");
    if (leadDate) {
        leadDate.innerHTML = d.toLocaleDateString("en-US", { month: 'long', year: 'numeric' });
    }

    var legacy = document.getElementById("date-element");
    if (legacy) {
        legacy.innerHTML = "CHICAGO, IL - " + longDate + " - FOUR PAGES";
    }
}

function fetchWeather() {
    var url = "https://api.open-meteo.com/v1/forecast?latitude=41.8781&longitude=-87.6298&current=temperature_2m,weather_code&temperature_unit=fahrenheit&timezone=America%2FChicago";
    return fetch(url)
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (data) {
            if (!data || !data.current) return null;
            var t = Math.round(data.current.temperature_2m);
            return weatherDescription(data.current.weather_code) + ", " + t + "&deg;F";
        })
        .catch(function () { return null; });
}

function weatherDescription(code) {
    if (code === 0 || code === 1) return "Sunny";
    if (code === 2) return "Partly Cloudy";
    if (code === 3) return "Overcast";
    if (code === 45 || code === 48) return "Foggy";
    if (code >= 51 && code <= 57) return "Drizzling";
    if (code >= 61 && code <= 67) return "Rainy";
    if (code >= 71 && code <= 77) return "Snowing";
    if (code >= 80 && code <= 82) return "Showers";
    if (code >= 85 && code <= 86) return "Snow Showers";
    if (code >= 95) return "Thunder";
    return "Unsettled";
}

function toRoman(num) {
    if (num <= 0) return num.toString();
    var lookup = [
        ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400],
        ["C", 100], ["XC", 90], ["L", 50], ["XL", 40],
        ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]
    ];
    var result = "";
    for (var i = 0; i < lookup.length; i++) {
        while (num >= lookup[i][1]) {
            result += lookup[i][0];
            num -= lookup[i][1];
        }
    }
    return result;
}

function getWeekNumber(d) {
    var date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
    var yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
    return Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
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