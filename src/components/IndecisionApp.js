import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";
import OptionModal from "./OptionModal";

/**************
 Main Component
**************/

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      selectedOption: undefined
    }
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteSelectedOption = this.handleDeleteSelectedOption.bind(this);
  }

  /*********************
  React Lifecyle Methods
  *********************/

  componentdidMount() {
    try {
      // get JSON data from localStorage set in componentDidUpdate
      const json = localStorage.getItem("options");
      // parse that data into a Javascript object
      const options = JSON.parse(json);
      // update state to the value of the options const 
      //  syntax to implicitly return an object from a setState without a return statement 
      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (e) {
      // if JSON data is invalid, do nothing and fall back to the empty array
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json)
    }
  }

  /********************
  Event Handler Methods
  ********************/

  // no need for prevState because we are setting options to an empty array regardless
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  // method concerned with deleting an individual option - it takes the option argument that a user wants to delete
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((option) => {
          return optionToRemove !== option;
        })
      }
    });
  }

  handleDeleteSelectedOption = () => {
    this.setState(() => {
      return {
        selectedOption: undefined
      }
    })
  }

  /*
   method to handle 2 cases:
   1. validation
    - given the options array defined in state, find the index of a new string being passed (option)
    - if the string is greater than or equal to 0, or greater than -1, we know that string already exists in the       options array. if no errors: simply move onto setState call 
   2. passing a new option to main state
  */

  handleAddOption(option) {
    if (!option) {
      return "Enter a valid value to add item";
    } else if (this.state.options.indexOf(option) >= 0) {
      return "This option already exists";
    } else {
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(option)
        }
      })
    }
  }

  // random number generator for action button 
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    console.log(randomNum)
    const option = this.state.options[randomNum];
    console.log(this.state.options)
    console.log(option)
  
    this.setState(() => {
      return {
        selectedOption: option   
      }
    })
  }

  /**********************
  Rendering of Components
  **********************/

  render() {
    const title = "Indecision App";
    const subtitle = "Put your life in the hands of a computer."

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className = "container">
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <div className = "options-body">
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
        </div>
        </div>
        <OptionModal 
          selectedOption = {this.state.selectedOption}
          handleDeleteSelectedOption = {this.handleDeleteSelectedOption}
        />
      </div>
    )
  }
}


