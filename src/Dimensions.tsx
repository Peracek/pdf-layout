import React from 'react'
import { Dimensions as DimensionsShape } from './App'
import { observer } from 'mobx-react'

@observer
export class Dimensions extends React.Component<{ dimensions: DimensionsShape }> {
  render() {
    const { dimensions } = this.props

    return (
      <div>
        x{' '}
        <input
          type="number"
          value={dimensions.x}
          onChange={e => (dimensions.x = +e.target.value)}
        />
        y{' '}
        <input
          type="number"
          value={dimensions.y}
          onChange={e => (dimensions.y = +e.target.value)}
        />
      </div>
    )
  }
}
