import React from 'react';
import {
    Chart
} from 'react-google-charts';

var Chartgg = React.createClass({
    getInitialState: function() {
        return {

        }
    },
    renderChart: function(){
      return(
        <div className = {"my-pretty-chart-container"} >
                <Chart chartType = "AreaChart"
                data = {[
                        ['Age', 'Weight'],
                        [8, 12],
                        [4, 5.5],
                        [3, 7.2],
                        [1.2, 5.9]
                    ]}

                options = {
                    {
                      title: 'Overall Score vs. Position',
                      colors: ['green'],
                      pointSize: 6,
                      vAxis: {title: 'Overall Score'},
                    }
                }
                graph_id = "ScatterChart" width = {"100%"} height = {"400px"} legend_toggle = {true} />
          </div>
      )
    },

    componentDidMount: function() {
    // var data = new google.visualization.DataTable();
    var options = {
       	title: 'Age vs. Weight comparison',
        hAxis: {title: 'Age', minValue: 0, maxValue: 15},
        vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
        legend: 'none'
    };

    var rows = [
       	[ 2011, 8, 12],
       	[ 2012,4,  5.5],
       	[ 2013,11, 14],
       	[ 2014,4,  5],
       	[ 2015,3,  3.5],
       	[ 2016,6.5, 7]
    ];

    var columns = [
    {
        'type': 'number',
        'label' : 'Age'
    },
    {
        'type' : 'number',
        'label' : 'Weight'
    },
    {
        'type' : 'number',
        'label' : 'Year'
    }
    ];

      	this.setState({
            'rows' : rows,
            'columns' : columns,
            'options' : options
        });


},

    render: function() {
        return (
          <div>
             <Chart chartType = "AreaChart" rows = {this.state.rows} columns = {this.state.columns} options = {this.state.options} graph_id = "ScatterChart"  width={"100%"} height={"400px"}  legend_toggle={true} />
          </div>
        );
    }
});

module.exports = Chartgg;
