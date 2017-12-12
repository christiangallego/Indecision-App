import React from "react";
import Option from "./Option";

/*************
Options component gets passed down state as props - see main component render
this.state.options becomes this.props.options
*************/

const Options = (props) => {
  return (
    <div >
      <div className = "options-header">
        <h3>Your Options</h3>
        <button 
          className = "button button-link"
          onClick={props.handleDeleteOptions}>Remove all
        </button>
      </div>
      {props.options.length === 0  && <p className = "options-message">Get started by entering an option!</p>}
      {
        props.options.map((option, index) => 
          // implicitly return JSX Option Component by putting it on its own line without a return statement
          <Option
          key={option}
          optionText={option}
          count = {index + 1}
          handleDeleteOption={props.handleDeleteOption}
        />
        )
      }
    </div>
  );
};

export default Options;