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

  handleKeyPress = (e) => {
    if (e.key === 'Enter')
      this.props.createTodo.bind(null, e.target.value)
  }

  render() {
    return (
      <div className="create-todo">
        <input type="text"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress} />
        <button type='submit' onClick={this.props.createTodo.bind(null, this.state.inputValue)}>+</button>
      </div>
    );
  }
}

export default CreateTodo
