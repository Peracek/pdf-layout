import React from 'react'
import './App.css'
import { Controls } from './Controls'
import { Result } from './Result'
import { observable } from 'mobx'
import { calc } from './calc'

export interface Dimensions {
  x: number
  y: number
}
export interface Pattern {
  name: string
  copies: number
}
export interface Config {
  pageSize: Dimensions
  patternSize: Dimensions
  patterns: Pattern[]
}

const defaultConfig: Config = {
  pageSize: {
    x: 100,
    y: 50,
  },
  patternSize: {
    x: 1,
    y: 1,
  },
  patterns: [
    {
      name: 'pattern A',
      copies: 100,
    },
  ],
}

class App extends React.Component<{}, { result: string[][] }> {
  @observable
  config = defaultConfig

  state = {
    result: [],
  }

  handleCalculate = () => {
    console.log('about to calculate')
    const result: number[][] = calc({
      pageSize: this.config.pageSize,
      patternSize: this.config.patternSize,
      copies: this.config.patterns.map(p => p.copies),
    })
    console.log('result', result)
    const mapped = result.map(page =>
      page.map(patternIdx => {
        if (patternIdx < this.config.patterns.length) {
          return this.config.patterns[patternIdx].name
        } else {
          return 'blank'
        }
      }),
    )

    this.setState({ result: mapped })
    // alert(JSON.stringify(mapped))
  }

  render() {
    return (
      <div className="App">
        <Controls config={this.config} onCalculate={this.handleCalculate} />
        <Result result={this.state.result} />
      </div>
    )
  }
}

export default App
