import React, { Component } from 'react';
import UbdcalTemplate from './components/ubdcalTemplate';
import Form from './components/Form';
import Result from './components/Result';


class App extends Component {
  state={
    input : 0,
    resultNum : 0
  }

  handleChange = (e) => {
    this.setState({
      input:e.target.value // input의 다음 바뀔 값
    });
  }

  transNum = () => {
    let resNum = this.state.input / 172122;
    this.setState({
      input : 0,
      resultNum : resNum.toFixed(3)
    });
  }
  
  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.transNum();
    }
  }

  render() {
    const {input} = this.state;
    const{
      transNum,
      handleKeyPress,
      handleChange
    } = this;
    return (
      <div>
      <UbdcalTemplate form={<Form
      value={input} 
      onClick={transNum} 
      handleKeyPress={handleKeyPress}
      handleChange={handleChange}
      /> }
      result={<Result value={this.state.resultNum}/>}/>
      </div>
    );
  }
}

export default App;