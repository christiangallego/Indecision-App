import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    const result = localStorage.getItem("count");
    const num = parseInt(result, 10);
    if (!isNaN(num)) { // if it is a valid number
      this.setState(() => {
        return {
          count: num
        }
      })
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

  // obsolete syntax because setState is asyncronous and may not update the state when you want it to or have unintended consequences
  // use setState with an update function and passing it in prevState as a parameter

  // handleAddOne() {
  //   this.setState({
  //       count: this.state.count + 1
  //     }
  // }
