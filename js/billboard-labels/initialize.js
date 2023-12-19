function generateLabels() {
  var labels = [];
  for (var key in data) {
    var artist = key;
    var cur_labels = data[key];
    for (var i = 0; i < cur_labels.length; i++) {
      if (labels.indexOf(cur_labels[i]) == -1) {
        labels.push(cur_labels[i]);
      }
    }
  }
  return labels;
}

function generateCounts() {
  var label_counts = [];
  for (var i = 0; i < labels.length; i++) {
    label_counts.push(0);
  }
  for (var key in data) {
    var artist = key;
    var cur_labels = data[key];
    for (var i = 0; i < cur_labels.length; i++) {
      var index = labels.indexOf(cur_labels[i]);
      label_counts[index] += 1;
    }
  }
  return label_counts;
}

var labels = generateLabels();
var counts = generateCounts();

function sortCountsAndLabels() {
  var sorted_labels = [];
  var sorted_counts = [];
  for (var i = 0; i < labels.length; i++) {
    var max = Math.max(...counts);
    var index = counts.indexOf(max);
    sorted_labels.push(labels[index]);
    sorted_counts.push(counts[index]);
    labels.splice(index, 1);
    counts.splice(index, 1);
  }
  labels = sorted_labels;
  counts = sorted_counts;
}

sortCountsAndLabels();

const chart_data = {
  labels: labels,
  datasets: [{
    label: 'Number of Artists',
    data: counts,
    borderWidth: 1
  }]
};

const config = {
  type: 'bar',
  data: chart_data,
  options: {
    indexAxis: 'y',
    scales: {
      y: {
        beginAtZero: true
      },
    }
  },
  responsive: true,
};

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

function updateLists() {
  var list = document.getElementById("listOfLabels");
  for (var i = 0; i < labels.length; i++) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(labels[i] + " (" + counts[i] + ")"));
    list.appendChild(li);
  }

  var list = document.getElementById("listOfArtists");
  for (var key in data) {
    var artist = key;
    var cur_labels = (data[key]).join(", ");
    if (cur_labels == "") {
      cur_labels = "None";
    }
    var li = document.createElement("li");
    var b = document.createElement("b");
    b.appendChild(document.createTextNode(artist));
    var p = document.createElement("span");
    p.appendChild(document.createTextNode(": " + cur_labels));
    li.appendChild(b);
    li.appendChild(p);
    li.appendChild(document.createTextNode(artist + ": " + cur_labels));
    list.appendChild(li);
  }
}

function toggle(listName) {
  var list = document.getElementById(listName);
  if (list.style.display == "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }

}

document.addEventListener('DOMContentLoaded', function () {
  myChart.update();
  document.getElementById("lastUpdated").innerHTML = "Last Updated: " + lastUpdated;
  updateLists();
});