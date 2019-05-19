import React from 'react';
import './Result.css';

const Result = ({value}) => {
  return (
    <div className="form1">
      <h2>= <input className="inputBox" value={value} readOnly/></h2>
    </div>
  );
};

export default Result;