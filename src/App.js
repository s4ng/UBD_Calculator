import React, { Component } from 'react';
import UbdcalTemplate from './components/ubdcalTemplate';
import Form from './components/Form';
import Result from './components/Result';


class App extends Component {
  render() {
    return (
      <div>
      <UbdcalTemplate form={<Form
      //Value={input} onClick={handleChange()} onKeyPress={handleKeyPress()}
      />}/>
      <Result vaule={this.callBack}/>
      </div>
    );
  }
}

export default App;