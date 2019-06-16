import React from "react";
import { ConfigItem } from "./ConfigItem";

export class Controls extends React.Component {
  counter = 0

  state = {
    dimensions: {
      width: 100,
      height: 50
    },
    patterns: [{
      id: -1, name: 'A', copies: 20
    }]
  };

  handleAdd = () => {
    const { patterns } = this.state
    this.setConfig({patterns: [...patterns, { id: this.counter++ }]})
  }

  handleUpdate = (item) => {
    const patterns = [...this.state.patterns]
    const idx = patterns.findIndex(p => p.id === item.id)
    patterns[idx] = item

    this.setConfig({
      ...this.state,
      patterns
    })
  }

  handleDelete = (id) => {
    const { patterns } = this.state
    this.setConfig({patterns: [...patterns].filter(p => p.id !== id)})
  }

  setConfig = config => {
    this.props.onConfigChange(config)
    this.setState(config)
  }

  componentDidMount() {
    this.props.onConfigChange(this.state)
  }

  render() {
    const { onCalculate } = this.props;
    const { patterns } = this.state
    return (
      <div>
        {/* <input type='number' value={} on /> */}
        {patterns.map(item => (
          <ConfigItem key={item.id} id={item.id} handleUpdate={this.handleUpdate} handleDelete={this.handleDelete} />
        ))}
        <button onClick={this.handleAdd}>add</button>
        <button onClick={onCalculate}>calculate</button>
      </div>
    );
  }
}
