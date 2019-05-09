import React from 'react';
import './Form.css';

const Form = ({value, onCreate, onKeyPress}) => {
  return (
    <div className="form">
      <input value={value} onKeyPress={onKeyPress}/>
      <div className="create-button" onClick={onCreate}>
        변환
      </div>
    </div>
  );
};

export default Form;