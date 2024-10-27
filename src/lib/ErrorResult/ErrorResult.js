import React from 'react';
import styles from './ErrorResult.module.css';
import Icon from './lib/Icon'



const ErrorResult = ({scansData}) => {
  return (
<ul className={styles.ul}>
  <li className={styles.li}>
    <h2 className={styles.h2}>{scansData.result[0].title}</h2>
    <div className={styles.div}>
      <p className={styles.p}>{scansData.result[0].amount}</p>
      <Icon name = "ondekte-fouten" />
    </div>
  </li>
  <li className={styles.li}>
    <h2 className={styles.h2}>{scansData.result[1].title}</h2>
    <div className={styles.div}>
      <p className={styles.p}>{scansData.result[1].amount}</p>
      <Icon name = "contrast-fouten" />
    </div>
  </li>
  <li className={styles.li}>
    <h2 className={styles.h2}>{scansData.result[2].title}</h2>
    <div className={styles.div}>
      <p className={styles.p}>{scansData.result[2].amount}</p>
      <Icon name = "structuele-fouten" />
    </div>
  </li>
  <li className={styles.li}>
    <h2 className={styles.h2}>{scansData.result[3].title}</h2>
    <div className={styles.div}>
      <p className={styles.p}>{scansData.result[3].amount}</p>
      <Icon name = "ontbrekende-alt-teksten" />
    </div>
  </li>
  <li className={styles.li}>
    <h2 className={styles.h2}>{scansData.result[4].title}</h2>
    <div className={styles.div}>
      <p className={styles.p}>{scansData.result[4].amount}</p>
      <Icon name = "aria-label" />
    </div>
  </li>
</ul>
  );
};

export default ErrorResult;