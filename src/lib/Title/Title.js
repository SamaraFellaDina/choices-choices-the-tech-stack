import React from 'react';
import styles from './Title.module.css'
import Icon from './lib/icon'

const Title = ({sitesData}) => {
  return (
<section className={styles.section}>
  <div className={styles.div}>
    <h1 className={styles.h1}>{sitesData.title}/home</h1>
    <p>Automatische Scan</p>
  </div>
  <nav className={styles.nav}>
    <button className={styles.button}><Icon name="arrow-left" /></button>
     <span className={styles.span}>Aug.</span>
    <button className={styles.button}><Icon name="arrow-right" /></button>
  </nav>
</section>
  );
};

export default Title;