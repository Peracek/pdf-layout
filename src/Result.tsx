import React from 'react'

export class Result extends React.Component<{ result: string[][] }> {
  render() {
    const { result } = this.props
    const pages = result.map(patterns => <div>{patterns.join(';')}</div>)

    return <div>{pages}</div>
  }
}
