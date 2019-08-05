import React from 'react'
import { Dimensions as DimensionsShape } from './App'
import { observer } from 'mobx-react'

@observer
export class Dimensions extends React.Component<{ dimensions: DimensionsShape }> {
  render() {
    const { dimensions } = this.props

    return (
      <div>
        šířka{' '}
        <input
          type="number"
          value={dimensions.x !== 0 ? dimensions.x : ''}
          onChange={e => (dimensions.x = +e.target.value)}
        />
        výška{' '}
        <input
          type="number"
          value={dimensions.y !== 0 ? dimensions.y : ''}
          onChange={e => (dimensions.y = +e.target.value)}
        />
      </div>
    )
  }
}
