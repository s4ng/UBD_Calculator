import React from 'react';
import './Result.css';

const Result = ({value}) => {

  return (
    <div className="form1">
      <h2> = </h2>
      <h2 className="resultC">{value}</h2>
      <h2 className="UBD">UBD</h2>
    </div>
  );
};

export default Result;