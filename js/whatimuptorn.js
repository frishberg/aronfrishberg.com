var d = new Date();
var dayOfWeek = d.getDay();
var hour = d.getHours();
var minute = d.getMinutes();

function randomIdle() {
    var options = [
        "Nothing currently going on.  Hopefully I'm getting some sleep!",
        "Nothing on the docket.  Probably just chilling.",
        "Schedule empty.  No activities planned.",
    ];
    var random = Math.floor(Math.random() * options.length);
    return options[random];
}

function randomWeekendIdle() {
    var options = [
        "It's the weekend!  Probably having barrels of fun!",
        "It's the weekend!  Probably sleeping in and relaxing!",
        "It's the weekend.  I hope I'm doing nothing!",
        "It's the weekend!  According to my bubbe, I'm a 'mover and a shaker', so I might be changing the world.  Or not.  Who knows.",
    ];
    var random = Math.floor(Math.random() * options.length);
    return options[random];
}

function checkCurrentActivity() {
    var temp = randomIdle();
    if (dayOfWeek == 1)  { //monday
        if ((hour == 11 && minute >= 15) || (hour == 12 && minute <= 5)) {
            temp = "Currently in ECON 10A with Professor Geoff Clarke!";
        }
        else if ((hour == 14 && minute >= 30) || (hour == 15 && minute <= 50)) {
            temp = "Currently in MATH 10B with Professor Keith Merrill!";
        }
        else if ((hour == 17 && minute >= 40) || (hour == 18 && minute <= 60)) {
            temp = "Currently in COSI 12B Recitation.  Ew.  Might be skipping it to sleep to be honest.";
        }
        else if ((hour == 20 && minute >= 30) || (hour == 21 && minute <= 30)) {
            temp = "Currently in TAMID!  Hopefully our chapter hasn't been shut down yet.";
        }
    }

    else if (dayOfWeek == 2) { //tuesday
        if ((hour == 14 && minute >= 20) || (hour == 15 && minute <= 40)) {
            temp = "Currently in UWS 5A with Instructor Robert Cochran!  Learning about sugar and the sugar industry!";
        }
        else if ((hour == 15 && minute >= 55) || (hour == 16) || (hour == 17 && minute <= 15)) {
            temp = "Currently in COSI 12B with Professor Iraklis Tsekourakis!  Learning about some cool java stuff!";
        }
    }

    else if (dayOfWeek == 3) { //wednesday
        if ((hour == 11 && minute >= 15) || (hour == 12 && minute <= 5)) {
            temp = "Currently in ECON 10A with Professor Geoff Clarke!";
        }
        else if ((hour == 14 && minute >= 30) || (hour == 15 && minute <= 50)) {
            temp = "Currently in MATH 10B with Professor Keith Merrill!";
        }
        else if ((hour == 20 && minute >= 30) || (hour == 21 && minute <= 30)) {
            temp = "Currently in Investing Club!  Learning about the stock market and valuation!";
        }
    }

    else if (dayOfWeek == 4) { //thursday
        if ((hour == 11 && minute >= 15) || (hour == 12 && minute <= 5)) {
            temp = "Currently in ECON 10A with Professor Geoff Clarke!";
        }
        else if ((hour == 14 && minute >= 20) || (hour == 15 && minute <= 40)) {
            temp = "Currently in UWS 5A with Instructor Robert Cochran!  Learning about sugar and the sugar industry!";
        }
        else if ((hour == 15 && minute >= 55) || (hour == 16) || (hour == 17 && minute <= 15)) {
            temp = "Currently in COSI 12B with Professor Iraklis Tsekourakis!  Learning about some cool java stuff!";
        }
        else if ((hour == 18 && minute >= 30) || (hour == 19) || (hour == 20 && minute <= 20)) {
            temp = "Currently in ECON 10A recitation.  Possibly taking a quiz as you're reading this.  Could also have ended early and I could be eating dinner.  Fun times.";
        }
    }

    else if (dayOfWeek == 5) { //friday
        if ((hour == 14 && minute >= 20) || (hour == 15) || (hour == 16 && minute <= 20)) {
            temp = "Currently in a MATH 10A exam... Wish me luck!";
        }
    }

    else if (dayOfWeek == 6 || dayOfWeek == 7) { //saturday
        temp = randomWeekendIdle();
    }
    return temp;
}

window.onload = function() {
    var current = checkCurrentActivity();
    document.getElementById("activity").innerHTML = current;
}