/*  To inster a canvas into html page at first heading place ("firstheading") */
document
    .getElementById("firstHeading")
    .insertAdjacentHTML(
        "afterend",
        '<canvas id="canvas01" width="600" height="300"></canvas>'
    );
/* Creating empty arrays */
let dataPoints = [];
let dataLabels = [];
let dataY = [];
let chartLive = null;
/* To retrieve data from the server using the fetch function: fetch function:
For every second, call updateChart method. Each time updateChart is called, it gets data from JSON, adds it to dataPoint and calls chart.render()  */
function updateChart() {
    fetch(
            "https://canvasjs.com/services/data/datapoints.php?xstart=" +
            (dataPoints.length + 1) +
            "&ystart=" +
            dataPoints[dataPoints.length - 1].y +
            "&length=1&type=json"
        )
        // Storing data in form of JSON
        .then((res) => res.json())
        .then((data) => {
            //adding data to dataPoints
            data.forEach((value) => {
                dataPoints.push({
                    x: value[0],
                    y: parseInt(value[1]),
                });
            });
            for (i = 0; i < dataPoints.length; i++) {
                dataLabels[i] = dataPoints[i].x;
                dataY[i] = dataPoints[i].y;
            }
            setTimeout(function() {
                let ctx = document.getElementById("canvas01");
                if (!chartLive) {
                    chartLive = new Chart(ctx, {
                        type: "line",
                        data: {
                            labels: dataLabels,
                            datasets: [{
                                data: dataY,
                                label: "Crime statistics",
                                borderColor: randomColor(),
                                fill: false,
                            }, ],
                        },
                        options: {
                            title: {
                                display: true,
                                text: "Live Chart with dataPoints from External JSON",
                                responsive: true,
                            },
                        },
                    });
                } else {
                    chartLive.data.labels = dataLabels;
                    chartLive.data.datasets[0].data = dataY;
                    chartLive.update();
                }
                updateChart();
            }, 1000);
        });
}

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
}

fetch("https://canvasjs.com/services/data/datapoints.php")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((value) => {
            dataPoints.push({
                x: value[0],
                y: parseInt(value[1]),
            });
        });
        for (i = 0; i < dataPoints.length; i++) {
            dataLabels[i] = dataPoints[i].x;
            dataY[i] = dataPoints[i].y;
        }
        console.log(dataPoints);
        console.log(dataLabels);
        console.log(dataY);

        updateChart();
    });

let table1 = document.getElementById("table1");
table1 = tableToJson(table1);

function tableToJson(table) {
    let data = [];
    for (i = 1; i < table.rows.length; i++) {
        let tableRow = table.rows[i];
        let rowData = [];
        for (j = 1; j < tableRow.cells.length; j++) {
            rowData.push(tableRow.cells[j].innerHTML);
        }
        data.push(rowData);
    }
    console.log(data);
    return data;
}

function arrayStringToFloat(table) {
    let data = [];
    for (i = 0; i < table.length; i++) {
        table[i] = table[i].replace(",", ".");
        data.push(parseFloat(table[i]));
    }
    return data;
}

function randomColor() {
    color =
        "rgb(" +
        Math.round(Math.random() * 200) +
        "," +
        Math.round(Math.random() * 200) +
        "," +
        Math.round(Math.random() * 200) +
        ")";

    return color;
}

const arrayWithoutElementAtIndex = function(arr, index) {
    return arr.filter(function(value, arrIndex) {
        return index !== arrIndex;
    });
};

document
    .getElementById("table1")
    .insertAdjacentHTML(
        "beforebegin",
        '<canvas id="canvas1" height="750" width="650"></canvas>'
    );
let ctx = document.getElementById("canvas1");
let myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: table1[0],
        datasets: [{
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[1], 0)),
                label: table1[1][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[2], 0)),
                label: table1[2][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[3], 0)),
                label: table1[3][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[4], 0)),
                label: table1[4][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[5], 0)),
                label: table1[5][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[6], 0)),
                label: table1[6][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[7], 0)),
                label: table1[7][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[8], 0)),
                label: table1[8][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[9], 0)),
                label: table1[9][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[10], 0)),
                label: table1[10][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[11], 0)),
                label: table1[11][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[12], 0)),
                label: table1[12][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[13], 0)),
                label: table1[13][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[14], 0)),
                label: table1[14][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[15], 0)),
                label: table1[15][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[16], 0)),
                label: table1[16][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[17], 0)),
                label: table1[17][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[18], 0)),
                label: table1[18][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[19], 0)),
                label: table1[19][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[20], 0)),
                label: table1[20][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[21], 0)),
                label: table1[21][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[22], 0)),
                label: table1[22][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[23], 0)),
                label: table1[23][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[24], 0)),
                label: table1[24][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[25], 0)),
                label: table1[25][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[26], 0)),
                label: table1[26][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[27], 0)),
                label: table1[27][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[28], 0)),
                label: table1[28][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[29], 0)),
                label: table1[29][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[30], 0)),
                label: table1[30][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[31], 0)),
                label: table1[31][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[32], 0)),
                label: table1[32][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[33], 0)),
                label: table1[33][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[34], 0)),
                label: table1[34][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[35], 0)),
                label: table1[35][0],
                borderColor: randomColor(),
            },
        ],
    },
    options: {
        plugins: {
            decimation: {
                enabled: true,
            },
            subtitle: {
                display: true,
                text: "Number in thousand",
            },
        },
        title: {
            display: true,
            text: "Crimes recorded by the police",
            responsive: true,
        },
    },
});

let table2 = document.getElementById("table2");
table2 = tableToJson(table2);

document
    .getElementById("table2")
    .insertAdjacentHTML(
        "beforebegin",
        '<canvas id="canvas2" width="600" height="500" ></canvas>'
    );
ctx = document.getElementById("canvas2");
new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["2007-09", "2010-2012"],
        datasets: [{
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[1], 0)),
                label: table2[1][0],
                backgroundColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[2], 0)),
                label: table2[2][0],
                backgroundColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[3], 0)),
                label: table2[3][0],
                backgroundColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[4], 0)),
                label: table2[4][0],
                backgroundColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[5], 0)),
                label: table2[5][0],
                backgroundColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[6], 0)),
                label: table2[6][0],
                backgroundColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[7], 0)),
                label: table2[7][0],
                backgroundColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[8], 0)),
                label: table2[8][0],
                backgroundColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[9], 0)),
                label: table2[9][0],
                backgroundColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[10], 0)),
                label: table2[10][0],
                backgroundColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[11], 0)),
                label: table2[11][0],
                backgroundColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[12], 0)),
                label: table2[12][0],
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[13], 0)),
                label: table2[13][0],
                backgroundColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[14], 0)),
                label: table2[14][0],
                backgroundColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[15], 0)),
                label: table2[15][0],
                backgroundColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[16], 0)),
                label: table2[16][0],
                backgroundColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[17], 0)),
                label: table2[17][0],
                backgroundColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[18], 0)),
                label: table2[18][0],
                backgroundColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[19], 0)),
                label: table2[19][0],
                backgroundColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[20], 0)),
                label: table2[20][0],
                backgroundColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[21], 0)),
                label: table2[21][0],
                backgroundColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[22], 0)),
                label: table2[22][0],
                backgroundColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[23], 0)),
                label: table2[23][0],
                backgroundColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[24], 0)),
                label: table2[24][0],
                backgroundColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[25], 0)),
                label: table2[25][0],
                backgroundColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[26], 0)),
                label: table2[26][0],
                backgroundColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[27], 0)),
                label: table2[27][0],
                backgroundColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[28], 0)),
                label: table2[28][0],
                backgroundColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[29], 0)),
                label: table2[29][0],
                backgroundColor: randomColor(),
            },
        ],
    },
    options: {
        title: {
            display: true,
            text: "Prison population",
            responsive: true,
        },
    },
});