import React from 'react';
import styles from './ErrorResult.module.css';


const ErrorResult = ({scansData}) => {
  return (
<ul>
  <li>
    <h2>{scansData.result[0].title}</h2>
    <div>
      <p>{scansData.result[0].amount}</p>
    </div>
  </li>
  <li>
    <h2>{scansData.result[1].title}</h2>
    <div>
      <p>{scansData.result[1].amount}</p>
    </div>
  </li>
  <li>
    <h2>{scansData.result[2].title}</h2>
    <div>
      <p>{scansData.result[2].amount}</p>
    </div>
  </li>
  <li>
    <h2>{scansData.result[3].title}</h2>
    <div>
      <p>{scansData.result[3].amount}</p>
    </div>
  </li>
  <li>
    <h2>{scansData.result[4].title}</h2>
    <div>
      <p>{scansData.result[4].amount}</p>
    </div>
  </li>
</ul>
  );
};

export default ErrorResult;