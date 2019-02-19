import React from 'react'

class CreateTodo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: ""
    }
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  render() {
    // let inputValue;
    return (
      <div className="create-todo">
        <input type="text" onBlur={this.handleChange} />
        <button type='submit' onClick={this.props.createTodo.bind(null, this.state.inputValue)}>+</button>
      </div>
    );
  }
}

export default CreateTodo
