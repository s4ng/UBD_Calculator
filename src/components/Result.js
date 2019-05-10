import React from 'react';
import './Result.css';

const Result = ({value}) => {
  return (
    <div className="form">
      <input value={value} readOnly/>
    </div>
  );
};

export default Result;