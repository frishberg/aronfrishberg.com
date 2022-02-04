var target_words = ["true", "facts", "haha", "fucking", "coding", "chill", "chilling", "awesome", "hype", "morning", "love", "good"]
var d = new Date()
var word_of_day = target_words[(d.getMonth() * d.getDate() * d.getFullYear() * 42) % target_words.length]
var curRow = 0; var curCol = 0;

window.onload = function () {
    var temp = window.location.href;
    if (temp.includes("?")) {
        var info = temp.substring(temp.indexOf("?") + 1)
        word_of_day = decryptLink(info)
        alert("word of day set to : " + word_of_day)
    }
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < word_of_day.length; j++) {
            createBox(i, j)
        }
        createSpacer()
    }
}

function createCustom() {
    window.location.href = "custom.html";
}

function testGuess(guessedWord) {
    alert("Guess : " + testGuess)
    if (guessedWord == word_of_day) {
        for (var i = 0; i < word_of_day.length; i++) {
            document.getElementById(curRow + "," + i).style.backgroundColor  = "#1982FC";
            document.getElementById(curRow + "," + i).style.borderColor = "transparent";
        }
        curRow = -5; curCol = -5; //breaking my own game so it stops
        document.getElementById("output").innerHTML = "Bingo!  Nice job."
    }
    else {
        for (var i = 0; i < guessedWord.length; i++) {
            var currentLetter = (guessedWord.substring(i, i + 1))
            if (word_of_day.substring(i, i + 1) == currentLetter) { //correct
                document.getElementById(curRow + "," + i).style.backgroundColor  = "#1982FC";
                document.getElementById(curRow + "," + i).style.borderColor = "transparent";
            }
            else if (word_of_day.includes(currentLetter)) {
                document.getElementById(curRow + "," + i).style.backgroundColor  = "#43CC47";
                document.getElementById(curRow + "," + i).style.borderColor = "transparent";
            }
            document.getElementById((curRow + 1) + ",0").focus()
        }
        curRow++;
        curCol=0;
        document.getElementById(curRow + "," + curCol).focus()
    }
}

function submitGuess() {
    var result = ""
    for (var i = 0; i < word_of_day.length; i++) {
        result += document.getElementById(curRow + "," + i).value
    }
    if (result.length == word_of_day.length) {
        testGuess(result.toLowerCase())
    }
    else {
        document.getElementById("output").innerHTML = "Wrong Number of Letters."
    }
    document.getElementById(curRow + "," + (curCol)).focus()
}

function createBox(row, col) {
    var node = document.createElement("input");
    node.setAttribute("id", row + "," + col);
    node.setAttribute("maxlength", 1);
    document.getElementById("carrot").appendChild(node);
}

function createSpacer() {
    var node = document.createElement("p");
    document.getElementById("carrot").appendChild(node);
}

document.addEventListener('keydown', function(event) {
    console.log(event.key)
    if (curCol<word_of_day.length && curCol>=0) {
        if (event.key == "Enter") {
            submitGuess()
        }
        else if (event.key=="Shift") {}
        else if ((event.key == "Backspace" || event.key=="Delete")) {
            if (document.getElementById(curRow + "," + curCol).value == "" && curCol>0) { //empty delete
                curCol-=1;
                document.getElementById(curRow + "," + (curCol)).focus()
            }
        }
        else if (curCol<word_of_day.length) {
            document.getElementById(curRow + "," + (curCol)).focus()
            if (curCol<word_of_day.length-1) {
                curCol+=1;
            }
        }
    }
});

setInterval(function () {document.getElementById(curRow + "," + (curCol)).focus()}, 250);