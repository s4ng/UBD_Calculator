import React, { Component } from 'react';
import UbdcalTemplate from './components/ubdcalTemplate';
import Form from './components/Form';
import Result from './components/Result';



class App extends Component {
  render() {
    return (
      <UbdcalTemplate form={<Form/>} result={<Result/>}>
        템플릿 완성
      </UbdcalTemplate>
    );
  }
}

export default App;