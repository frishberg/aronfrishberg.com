var target_words = ["true", "facts", "haha", "fucking", "coding", "chill", "chilling", "awesome", "hype", "morning", "love", "schmuck", "good"]
var d = new Date()
var word_of_day = target_words[(d.getMonth() * d.getDate() * d.getFullYear() * 42) % target_words.length]
var curRow = 0; var curCol = 0;

window.onload = function () {
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < word_of_day.length; j++) {
            createBox(i, j)
        }
        createSpacer()
    }
}

function testGuess(guessedWord) {
    if (guessedWord == word_of_day) {
        for (var i = 0; i < word_of_day.length; i++) {
            document.getElementById(curRow + "," + i).style.color = "#147efb";
        }
        alert("Correct!")
    }
    else {
        for (var i = 0; i < guessedWord.length; i++) {
            var currentLetter = (guessedWord.substring(i, i + 1))
            if (word_of_day.substring(i, i + 1) == currentLetter) { //correct
                document.getElementById(curRow + "," + i).style.color = "#147efb";
            }
            else if (word_of_day.includes(currentLetter)) {
                document.getElementById(curRow + "," + i).style.color = "#53d769";
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
    testGuess(result)
}

function createBox(row, col) {
    var node = document.createElement("input");
    node.setAttribute("id", row + "," + col);
    node.setAttribute("maxlength", 1);
    //node.setAttribute("onkeyup", "jump(this.id)")
    document.getElementById("carrot").appendChild(node);
}
function createSpacer() {
    var node = document.createElement("p");
    document.getElementById("carrot").appendChild(node);
}

/*function jump(id) {
    var row = Number(id.substring(0, id.indexOf(",")))
    var col = Number(id.substring(id.indexOf(",") + 1))
    if (document.getElementById(id).value == "") {
        document.getElementById(row + "," + (col - 1)).focus()
    }
    else {
        document.getElementById(row + "," + (col + 1)).focus()
    }
}*/
document.addEventListener('keydown', function(event) {
    console.log(event.key)
    if (curCol<word_of_day.length && curCol>=0) {
        if (event.key == "Enter") {
            submitGuess()
        }
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

setInterval(function () {console.log(curRow + "," + curCol)}, 1000);