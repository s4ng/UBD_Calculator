import React from 'react';
import './Form.css';

const Form = ({value, onClick, handleKeyPress, handleChange}) => { 
  return (
    <div className="form">
      <input type="number" value={value} onChange={handleChange} 
      onKeyPress={handleKeyPress} placeholder="변환할 숫자를 입력하세요.."/>
      <div className="create-button" onClick={onClick}>
        변환
      </div>
    </div>
  
  );
}

export default Form;