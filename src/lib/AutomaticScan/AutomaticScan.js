"use client"; // Add this in Next.js if you're using Server Components

import { useEffect, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import styles from './AutomaticScan.module.css'

Chart.register(ArcElement, Tooltip, Legend);

const AutomaticScan = ({ scansData }) => {
  let percentage = scansData?.score || 0;

  let doughnutColor = percentage < 50 ? '#c30010' : percentage < 80 ? '#faa800' : '#228b22';
  let doughnutColorAlt = doughnutColor + "33";

  const data = {
    datasets: [
      {
        label: "Percentage",
        data: [percentage, 100 - percentage],
        backgroundColor: [doughnutColor, doughnutColorAlt],
        borderWidth: 0,
        cutout: "75%",
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    responsive: false,
    maintainAspectRatio: true,
  };
  
  return (
    <section className={styles.section}>
      <h2 className={styles.h2} >{scansData.title}</h2>
      <p>{scansData.description}</p>
      <div className={styles.div}>
        <figure className={styles.figure}>
        <Doughnut data={data} options={options} />
        <figcaption className={styles.figcaption}>{percentage}</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default AutomaticScan;
