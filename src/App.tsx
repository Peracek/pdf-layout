import React from 'react'
import { Controls } from './Controls'
import { Result } from './Result'
import { observable } from 'mobx'
import { calc } from './calc'
import styled from 'styled-components'

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
    x: 10,
    y: 10,
  },
  patterns: [
    {
      name: 'vzor 1',
      copies: 100,
    },
  ],
}

const SApp = styled.div``

class App extends React.Component<{}, { results: { layout: string[]; count: number }[] }> {
  @observable
  config = defaultConfig

  state = {
    results: [],
  }

  handleCalculate = () => {
    console.log('about to calculate')
    const results = calc(
      this.config.pageSize,
      this.config.patternSize,
      this.config.patterns.map(p => p.copies),
    )
    console.log('result', results)
    const mapped = results.map(result => {
      const layout = result.layout.map(patternIdx => {
        if (patternIdx < this.config.patterns.length) {
          return this.config.patterns[patternIdx].name
        } else {
          return 'blank'
        }
      })
      return { layout, count: result.count }
    })

    this.setState({ results: mapped })
    // alert(JSON.stringify(mapped))
  }

  render() {
    return (
      <div className="App">
        <Controls config={this.config} onCalculate={this.handleCalculate} />
        <Result results={this.state.results} />
      </div>
    )
  }
}

export default App
