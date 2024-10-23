"use client"

import React from 'react';
import styles from './TypeGraph.module.css';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler, } from "chart.js";
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler );


const TypeGraph = ({scansData}) => {

  let results = scansData.result;

  let ondekteFouten = 0;
  let contrastFouten = 1;
  let structueleFouten = 2;
  let ontbrekendeAltTeksten= 3;
  let OnbrekendeAriaLabels = 4; 

  console.log(results)
  const labels = [
    results[ondekteFouten].title, 
    results[contrastFouten].title,
    results[structueleFouten].title,
    results[ontbrekendeAltTeksten].title,
    results[ontbrekendeAltTeksten].title
  ];
  const datasets = [
    results[ondekteFouten].amount, 
    results[contrastFouten].amount,
    results[structueleFouten].amount,
    results[ontbrekendeAltTeksten].amount,
    results[ontbrekendeAltTeksten].amount
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        // Title of Graph
        label: "My Bar Chart",
        data: datasets,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
        ],
        borderWidth: 1,
        barPercentage: 1,
        borderRadius: {
          topLeft: 5,
          topRight: 5,
        },
      },
      // insert similar in dataset object for making multi bar chart
    ],
  };
  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: "Y-axis Lable",
        },
        display: true,
        beginAtZero: true,
        max: 100,
      },
      x: {
        title: {
          display: true,
          text: "x-axis Lable",
        },
        display: true,
      },
    },
  };

  return ( 
    <section>
    <div style={{ width: "1000px" }}>
      <Bar data={data} options={options} />
    </div> 
    <h2>Soorten foutmeldingen</h2>
    <figure>
      <canvas id="bar-chart" aria-label="Soorten fouten grafiek">
      <ul>
    
      </ul>

      </canvas>
    </figure>
  </section>
  );
};

export default TypeGraph;