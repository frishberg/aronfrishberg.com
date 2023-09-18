const labels = ['1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];

var data = {
    labels: labels,
    datasets: []
};

var config = {
    type: 'line',
    data: data,
    options: {
        scales : {
            y: {
                reverse: true
            }
        }
    }
};
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

function updateSelected() {
    data.datasets = []
    for (var i=0; i<all_data.length; i++) {
        if (document.getElementById(i).checked) {
            data.datasets.push(all_data[i]);
            myChart.update()
        }
    }
    myChart.update()
}
window.addEventListener('load', (event) => {
    updateSelected()
});

// checklist code

window.addEventListener('load', (event) => {
    var checkList = document.getElementById('list1');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
  if (checkList.classList.contains('visible'))
    checkList.classList.remove('visible');
  else
    checkList.classList.add('visible');
}
});