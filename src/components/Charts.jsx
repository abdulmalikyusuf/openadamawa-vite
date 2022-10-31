
import React from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2"
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
  BarElement,
	PointElement,
	LineElement,
  ArcElement,
	Title,
	Tooltip,
  Filler,
	Legend
} from "chart.js";

import { formatDigits } from "../utils/parseProjectData";


ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
  BarElement,
  ArcElement,
	Title,
	Tooltip,
  Filler,
	Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "bottom"
    },
    title: {
      display: false,
      fontSize: 18,
      position: "top",
      text: `Total Projects/LGA`
    },
  },
  pointBackgroundColor: "black",
  scales: { 
    y: {
      grid: {
        display: true
      },
      ticks: { 
        callback: (value, index, ticks) => {
          return formatDigits(value)
          }
        },
    x: { 
      grid: {
        display: true
      },
      ticks: {
        maxRotation: 80,
        callback: function(value, index) {
        const tick = this.getLabelForValue(value)
        const tickLength = tick.length
        return tickLength>10 ? '...' + tick.substring(tickLength-10, tickLength): tick
      }}
  }}
}};

export const LineChart = (props) => {
  const { labels, series, title } = props

  const data = {
    labels: labels.map(label => label.length > 20 ? '...'+label.slice(label.length-20, label.length): label),
    datasets: [{
      label: title,
      data: series,
      fill: false,
      lineTension: 0.5,
      borderColor: "red"
    },
  ]
  };

  return (
    <Line data={data} options={options}/>
  );
};

export const CircleChart = (props) => {
  const { series = [], labels = [], colors=["blue", "red", "green", "indigo"] } = props;
  
  const data = {
    labels,
    datasets: [{
      data: series,
      backgroundColor: ["#262B40", "#f5b759", "#cd632g", "#1B998B"]
    }],
  }
  const options = {
		responsive: true,
		plugins: {
			legend: {display: false, position: "top"},
		},
	};

  return (
    <Doughnut data={data} options={options}/>
  );
};

export const BarChart = (props) => {
  const { title, labels = [], series = [] } = props;
  
  const data = {
    labels: labels.map(label => label.length > 20 ? label.slice(label.length-20, label.length): label),
    datasets:  [{
      label: title,
      data: series,
      fill:false,
      barThickness: 5,
      // categoryPercentage: 0.7,
      // barPercentage: 0.5,
      backgroundColor: "Blue"
    }]
  }

  return (
    <Bar data={data} options={options}/>
  );
};

export const AreaChart = (props) => {
  const { labels, series, title } = props

  const data = {
    labels: labels.map(label => label.length > 20 ? '...'+label.slice(label.length-20, label.length): label),
    datasets: [{
      label: title,
      data: series,
      fill: 'origin',
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      lineTension: 0.5,
    },
  ]
  };

  return (
    <Line data={data} options={options}/>
  );
};