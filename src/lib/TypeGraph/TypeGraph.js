"use client"

import {React} from 'react';
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

  const rootStyles = getComputedStyle(document.documentElement);
  const colorBlue = rootStyles.getPropertyValue("--color-blue");
  const colorLightBlue = rootStyles.getPropertyValue("--color-lightblue");
  const fontFamily = rootStyles.getPropertyValue("--font-family");
  const colorBlack = rootStyles.getPropertyValue("--color-black");

  console.log(results)
  const labels = [
    results[ondekteFouten].title, 
    results[contrastFouten].title,
    results[structueleFouten].title,
    results[ontbrekendeAltTeksten].title,
    results[OnbrekendeAriaLabels].title
  ];
  const datasets = [
    results[ondekteFouten].amount, 
    results[contrastFouten].amount,
    results[structueleFouten].amount,
    results[ontbrekendeAltTeksten].amount,
    results[OnbrekendeAriaLabels].amount
  ];
  const data = {
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
  };
  
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: false,
          text: "Aantal",
        },
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: fontFamily,
            size: 16,
          },
        }
      },
      x: {
        title: {
          display: false,
          text: "Type fouten",
        },
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: fontFamily,
            size: 16,
          },
        }
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: colorBlack,
        anchor: "center",
        align: "center",
        font: {
          family: fontFamily,
          weight: "bold",
          size: 18,
        },
        formatter: (value) => value,
      },
      tooltip: {
        enabled: true, // Enable tooltips
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
  };

  return ( 
    <section className={styles.section}> 
    <h2 className={styles.h2}>Soorten foutmeldingen</h2>
    <figure>
      <canvas aria-label="Soorten fouten grafiek" className={styles.canvas}>
        <div>
          <Bar data={data} options={options} />
        </div>
      </canvas>
    </figure>
  </section>
  );
};

export default TypeGraph;