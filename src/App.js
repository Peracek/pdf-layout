import React from "react";
import "./App.css";
import { Controls } from "./Controls";
import { Result } from "./Result";

class App extends React.Component {

  state = {config: {}}

  handleConfigChange = (config) => {
    console.log('settin cfg', config)
    this.setState({
      config
    })
  }

  handleCalculate = () => {
    console.log(this.state.config)
  }

  render() {
    return (
      <div className="App">
        <Controls onConfigChange={this.handleConfigChange} onCalculate={this.handleCalculate} />
        <Result />
      </div>
    );
  }
}

export default App;
