import React from "react"

/*************
AddOption component uses "this" keyword. Therefore, constructor and props need
to be set up and the method this.props.handleAddOptions needs to be binded
*************/

export default class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  
  handleAddOption(e) {
    e.preventDefault();
    // trim deletes leading and trailing blank spaces
    const option = e.target.option.value.trim();
    // if this.props.handleAddOption catches an error, the following code handles that
    // a state object is created in the AddOption class to dynamically render appropriate message to the screen
    // the message to render is created in the handleAddOption method in the parent component
    // the child component AddOption is only concerned with rendering that message via it's own state 
    const error = this.props.handleAddOption(option);
    this.setState(() => {
      return {
        error: error
      }
    })
    if (!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p className = "add-option-error">{this.state.error}</p>}
        <form className = "add-option" onSubmit={this.handleAddOption}>
          <input className = "add-option-input" type="text" name="option"></input>
          <button className = "button">Add Option</button>
        </form>
      </div>
    )
  }
}