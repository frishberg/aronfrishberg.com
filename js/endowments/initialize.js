const labels = ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];

var data = {
    labels: labels,
    datasets: []
};

var config = {
    type: 'line',
    data: data,
};
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

function updateSelected() {
    data.datasets = []
    for (var i=0; i<all_data.length; i++) {
        data.datasets.push(all_data[i]);
        myChart.update()
    }
    myChart.update()
}
window.addEventListener('load', (event) => {
    updateSelected()
});