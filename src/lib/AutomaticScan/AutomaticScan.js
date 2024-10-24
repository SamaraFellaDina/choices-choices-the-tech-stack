"use client"; // Add this in Next.js if you're using Server Components

import { useEffect, useRef } from "react";
import { Chart, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";
import styles from './AutomaticScan.module.css'

ChartJS.register(ArcElement);

const AutomaticScan = ({ scansData }) => {
  // Use a ref to access the canvas
  const doughnutChartRef = useRef(null);

  let percentage = scansData?.score || 0;

  useEffect(() => {
    if (!doughnutChartRef.current) return; // Guard clause if ref is undefined

    let doughnutColor = percentage < 50 ? '#c30010' : percentage < 80 ? '#faa800' : '#228b22';
    let doughnutColorAlt = doughnutColor + "33";

    const data = {
      datasets: [
        {
          label: "Percentage",
          data: [percentage, 100 - percentage],
          backgroundColor: [doughnutColor, doughnutColorAlt],
          borderWidth: 0,
          cutout: "75%", // Creates a doughnut shape
        },
      ],
    };

    const options = {
      plugins: {
        datalabels: {
          display: false,
        },
        tooltip: {
          enabled: false, // Disable tooltips
        },
      },
      responsive: false,
      maintainAspectRatio: true,
    };

    // Clean up the chart when the component unmounts
    return () => {
      if (doughnutChartRef.current) {
        const chartInstance = Chart.getChart(doughnutChartRef.current);
        if (chartInstance) {
          chartInstance.destroy();
        }
      }
    };
  }, [percentage]); // Add `percentage` to the dependency array

  return (
    <section className={styles.section}>
      <h2 className={styles.h2} >{scansData.title}</h2>
      <p>{scansData.description}</p>
      <div className={styles.div}>
        <figure className={styles.figure}>
        <canvas className={styles.canvas} id="doughnut-chart" ref={doughnutChartRef} />
        <figcaption className={styles.figcaption}>{percentage}</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default AutomaticScan;
