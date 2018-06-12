

$('.select2').select2();

//EDAD
var barChartData = {
    xLabels: ['16-19', '20-5', '26-30'],
    datasets: [{
            backgroundColor: '#1963a0',
            data: [
                50,
                38,
                10,
                0
            ]
        }
    ]

};

var ctx = document.getElementById('edad-canvas').getContext('2d');

window.myBar = new Chart(ctx, {
    type: 'bar',
    data: barChartData,
    options: {
        responsive: true,
        legend: {
            display: false
        },
        scaleLabel: "<%=value%>%",
        scales: {
            xAxes: [{
                    gridLines: {
                        display: false,
                        color: "#ddd"
                    }
                }],
            yAxes: [{
                    position: 'right',
                    display: true,

                    ticks: {
                        min: 0,
                        max: 60,
                        stepSize: 15,
                        callback: function (tick) {
                            return tick.toString() + '%';
                        }
                    }
                }]
        }
    }
});










//SEXO
var config = {
    type: 'pie',
    data: {
        datasets: [{
                data: [
                    75,
                    25
                ],
                backgroundColor: [
                    '#1963a0',
                    '#59a1dc'
                ],
                label: 'Dataset 1'
            }],
        labels: [

            'Masculino',
            'Femenino',
        ]
    },
    options: {
        responsive: true,

        pieceLabel: {
            render: 'percentage',
            fontColor: ['white', 'white'],
            precision: 2
        },
        legend: {
            onClick: (e) => e.stopPropagation()
        }
    }
};

var ctx = document.getElementById('sexo-canvas').getContext('2d');

window.myPie = new Chart(ctx, config);











//CIUDADES
var barChartData = {
    xLabels: ['La Coruña', 'Santiago', 'Vigo', '', '', '', ''],
    datasets: [{
            backgroundColor: '#1963a0',
            data: [
                52,
                13,
                5,
                0
            ]
        }
    ]

};

var ctx = document.getElementById('ciudades-canvas').getContext('2d');

window.myBar = new Chart(ctx, {
    type: 'bar',
    data: barChartData,
    options: {
        responsive: true,
        legend: {
            display: false
        },
        scaleLabel: "<%=value%>%",
        scales: {
            xAxes: [{
                    gridLines: {
                        display: false,
                        color: "#f9f9f9"
                    }
                }],
            yAxes: [{
                    position: 'right',
                    display: true,

                    ticks: {
                        min: 0,
                        max: 60,
                        stepSize: 15,
                        callback: function (tick) {
                            return tick.toString() + '%';
                        }
                    }
                }]
        }
    }
});





//CONSUMO ONLINE VS FISICO
var config = {
    type: 'pie',
    data: {
        datasets: [{
                data: [
                    75,
                    25
                ],
                backgroundColor: [
                    '#1963a0',
                    '#59a1dc'
                ],
                label: 'Dataset 1'
            }],
        labels: [
            'Físico',
            'Online',
        ]
    },
    options: {
        responsive: true,

        pieceLabel: {
            render: 'percentage',
            fontColor: ['white', 'white'],
            precision: 2
        },
        legend: {
            onClick: (e) => e.stopPropagation()
        }
    }
};

var ctx = document.getElementById('consumo-area').getContext('2d');

window.myPie = new Chart(ctx, config);

