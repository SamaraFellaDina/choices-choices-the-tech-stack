"use client"

import {useEffect, useState} from 'react';
import styles from './TypeGraph.module.css';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler, } from "chart.js";
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler );


const TypeGraph = ({ scansData }) => {
  const results = scansData.result;

  const ondekteFouten = 0;
  const contrastFouten = 1;
  const structueleFouten = 2;
  const ontbrekendeAltTeksten = 3;
  const ontbrekendeAriaLabels = 4; 

  useEffect(() => {
    let rootStyles = getComputedStyle(document.documentElement);
    let colorBlue = rootStyles.getPropertyValue("--color-blue");
    let colorLightBlue = rootStyles.getPropertyValue("--color-lightblue");
    let fontFamily = rootStyles.getPropertyValue("--font-family");
    let colorBlack = rootStyles.getPropertyValue("--color-black");

    const labels = [
      results[ondekteFouten].title, 
      results[contrastFouten].title,
      results[structueleFouten].title,
      results[ontbrekendeAltTeksten].title,
      results[ontbrekendeAriaLabels].title
    ];
    const datasets = [
      results[ondekteFouten].amount, 
      results[contrastFouten].amount,
      results[structueleFouten].amount,
      results[ontbrekendeAltTeksten].amount,
      results[ontbrekendeAriaLabels].amount
    ];

    // Set chart data
    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Fouten",
          data: datasets,
          borderColor: colorBlue,
          backgroundColor: colorLightBlue,
          borderWidth: 3,
        },
      ],
    });
    
    // Set chart options
    setChartOptions({
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            display: false,
          },
          ticks: {
            font: {
              family: fontFamily,
              size: 16,
            },
          },
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            font: {
              family: fontFamily,
              size: 16,
            },
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: true,
          titleAlign: "center",
          bodyAlign: "center",
          backgroundColor: "#FFFFFF",
          borderWidth: 2,
          borderColor: colorBlue,
          padding: 10,
          displayColors: false,
          titleFont: {
            size: 18,
            weight: "bold",
            family: fontFamily,
          },
          titleColor: colorBlue,
          bodyFont: {
            size: 16,
            weight: "normal",
            family: fontFamily,
          },
          bodyColor: colorBlue,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      onHover: (event, elements) => {
        const canvas = event.native.target;
        if (elements.length) {
          canvas.style.cursor = "pointer";
        } else {
          canvas.style.cursor = "default";
        }
      },
    });
  }, [results]); // Add results to the dependency array

  return (
    <section className={styles.section}>
      <h2>Soorten foutmeldingen</h2>
      <figure>
        <canvas id="bar-chart" aria-label="Soorten fouten grafiek">
          <ul>
            <li>
              <Bar data={chartData} options={chartOptions} />
            </li>
          </ul>
        </canvas>
      </figure>
    </section>
  );
};

export default TypeGraph;
