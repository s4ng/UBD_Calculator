import React, { Component } from 'react';
import UbdcalTemplate from './components/ubdcalTemplate';
import Form from './components/Form';
import Result from './components/Result';


class App extends Component {
  state = {
    resultValue : 0
  }

  /*
  handleChange = (e) => {
    this.setState({
      resultValue : // input 의 다음 바뀔 값
    });
  }
  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleChange 호출
    if(e.key === 'Enter') {
      this.handleChange();
    }
  }

  */

  render() {
    const {input} = this.state;
    const {
      handleChange,
      handleKeyPress
    } = this;
    return (
      <div>
      <UbdcalTemplate form={<Form
      //Value={input} onClick={handleChange()} onKeyPress={handleKeyPress()}
      />}/>
      <Result vaule={this.state.resultValue}/>
      </div>
    );
  }
}

export default App;