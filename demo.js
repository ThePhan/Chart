function drawAccountsChart() {
    var data = new google.visualization.DataTable(),
        raw_data = [
            ['Parents', 80, 160],
            ['Students', 94, 128],
            ['Teachers', 78, 90],
            ['Admins', 68, 120],
            ['Staff', 97, 111]
        ],
        value,
        row = [null],
        formatter = new google.visualization.NumberFormat({
            suffix: '%',
            fractionDigits: 1
        }),
        options = {
            height:220,
            chartArea: { left:30, width: "70%", height: "70%" },
            backgroundColor: { fill:"transparent" },
            tooltop:{ textStyle: {fontSize: "12px",}},
            vAxis: {minValue: 0}
        },
        chart = new google.visualization.ColumnChart(document.getElementById('emailAccountsChart'));

    data.addColumn('string', 'Columns');
    for (var i = 0; i  < raw_data.length; ++i) {
        data.addColumn('number', raw_data[i][0]);
        data.addColumn({type:'string', role:'tooltip'});
        value = raw_data[i][1] / raw_data[i][2] * 100;
        row.push(value);
        row.push(formatter.formatValue(value) + ' (' + raw_data[i][1] + ' Users)');
    }
    data.addRow(row);

    chart.draw(data, options);
}
google.load('visualization', '1', {packages:['corechart'], callback: drawAccountsChart});
