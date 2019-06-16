import React from "react";

export class ConfigItem extends React.Component {

  state = { name: '', copies: 0 }

  handleChange = (event) => {
    const {value, name} = event.target
    const state = {
      ...this.state,
      [name]: value
    }
    this.setState(state)

    this.props.handleUpdate({id: this.props.id, ...state})
  }

  render() {
    const {
      id,
      handleDelete
    } = this.props

    return (
      <div>
        <form  onSubmit={this.submit}>
          <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
          <input name="copies" type="number" value={this.state.copies} onChange={this.handleChange} />
          {/* <button type='submit'>update</button> */}
        </form>
        <button onClick={() => handleDelete(id)}>delete</button>
      </div>
    );
  }
}
