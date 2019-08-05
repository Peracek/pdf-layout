import React from 'react'

export class Result extends React.Component<{ results: { layout: string[]; count: number }[] }> {
  render() {
    const { results } = this.props
    const pages = results.map(({ layout, count }) => (
      <div>
        {layout.join(';')} {count}
      </div>
    ))

    return <div>{pages}</div>
  }
}
