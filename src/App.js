import React, { Component } from 'react';
import UbdcalTemplate from './components/ubdcalTemplate';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <UbdcalTemplate form={<Form/>}>
        템플릿 완성
      </UbdcalTemplate>
    );
  }
}

export default App;