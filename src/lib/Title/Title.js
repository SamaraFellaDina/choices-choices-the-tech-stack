import React from 'react';
import styles from './Title.module.css'

const Title = ({sitesData}) => {
  return (
<section className={styles.section}>
  <div className={styles.div}>
    <h1 className={styles.h1}>{sitesData.title}/home</h1>
    <p>Automatische Scan</p>
  </div>
  {/* <nav>
    <button><Icon name="arrow-left" /></button>
     <span>Aug.</span>
    <button><Icon name="arrow-right" /></button>
  </nav> */}
</section>
  );
};

export default Title;