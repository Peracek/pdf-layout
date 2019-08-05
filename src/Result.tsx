import React from 'react'
import styled from 'styled-components'

const SResult = styled.div`
  display: flex;
  flex-direction: column;
`

const Page = styled.div`
  background-color: lightgray;
  margin: 1em;
  padding: 1em;
`

export class Result extends React.Component<{ results: { layout: string[]; count: number }[] }> {
  render() {
    const { results } = this.props
    const pages = results.map(({ layout, count }) => (
      <Page>
        <div style={{ marginBottom: '1ex' }}>kopie: {count}</div>
        <div>{layout.join(' | ')}</div>
      </Page>
    ))

    return <SResult>{pages}</SResult>
  }
}
