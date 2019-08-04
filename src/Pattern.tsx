import React from 'react'
import { observer } from 'mobx-react'
import { Pattern as PatternShape } from './App'

@observer
export class Pattern extends React.Component<{
  pattern: PatternShape
  onDelete: (pattern: PatternShape) => void
}> {
  render() {
    const { pattern, onDelete } = this.props

    return (
      <div>
        name <input value={pattern.name} onChange={e => (pattern.name = e.target.value)} />
        copies{' '}
        <input
          type="number"
          value={pattern.copies}
          onChange={e => (pattern.copies = +e.target.value)}
        />
        <button onClick={() => onDelete(pattern)}>delete</button>
      </div>
    )
  }
}
