import React from 'react'
import { observer } from 'mobx-react'
import { ConfigItem } from './ConfigItem'
import { Config, Pattern as PatternShape } from './App'
import { Dimensions } from './Dimensions'
import { Pattern } from './Pattern'
import { observable } from 'mobx'

@observer
export class Controls extends React.Component<{ config: Config; onCalculate: () => void }> {
  addPattern = () => {
    this.props.config.patterns.push({
      name: `vzor ${this.props.config.patterns.length + 1}`,
      copies: 1,
    })
  }

  deletePattern = (pattern: PatternShape) => {
    const { patterns } = this.props.config
    const idx = patterns.findIndex(p => p === pattern)
    patterns.splice(idx, 1)
  }

  render() {
    const { config } = this.props

    return (
      <div>
        <div>
          page size <Dimensions dimensions={config.pageSize} />
        </div>
        <div>
          pattern size <Dimensions dimensions={config.patternSize} />
        </div>
        <div>
          {config.patterns.map((pattern, idx) => (
            <Pattern key={idx} pattern={pattern} onDelete={this.deletePattern} />
          ))}
        </div>
        <button onClick={this.addPattern}>add pattern</button>
        <br />
        <button onClick={this.props.onCalculate}>calculate</button>
      </div>
    )
  }
}
