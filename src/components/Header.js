import React from "react";

/******************************
Stateless Functional Components
- ideal when a component is only presentational and are not concerned with managing complex state
- they are faster than classes - use them when possible 
- pass props as an argument to function if using props passed down from other components
- functions do not need a this call: e.g, this.props.options; instead use props.options
******************************/

const Header = (props) => {
  return (
    <div className = "header">
      <div className = "container">
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      </div>
    </div>
  )
}

export default Header;