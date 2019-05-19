import React from 'react';
import './Form.css';

const Form = ({value, onClick, onKeyPress}) => {

  return (
    <div className="form">
      <input value={value} onKeyPress={onKeyPress}/>
      <div className="create-button" onClick={onClick}>
        변환
      </div>
    </div>
  );
};

export default Form;