import React from "react";

/******************************
Stateless Functional Components
- ideal when a component is only presentational and are not concerned with managing complex state
- they are faster than classes - use them when possible 
- pass props as an argument to function if using props passed down from other components
- functions do not need a this call: e.g, this.props.options; instead use props.options
******************************/

const Action = (props) => {
  return (
    <div>
      <button
        className = "big-button"
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
    </button>
    </div>

  )
}

export default Action;