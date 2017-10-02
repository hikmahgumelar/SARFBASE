Highcharts.chart('container', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Monthly Average Temperature'
    },
    subtitle: {
        text: 'Source: monitoring.ibstower.com'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'Temperature (°C)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Ruang Server Riau',
        data: [24, 25, 25, 28, 32, 21, 22, 23, 23, 27, 20, 18]
    }, {
        name: 'Ruang Server Biliton',
        data: [20, 19, 21, 22, 29, 21, 20, 23, 26, 24, 30, 31]
    }]
});