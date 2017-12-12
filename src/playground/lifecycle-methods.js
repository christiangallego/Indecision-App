// 1. fires when the component first gets rendered to the DOM
// for example, when you first run Indecision App, componentDidMount() fires because we mounted
// a single instance of Indecision app

// lifecyle methods can only be used with class based components, not stateless functional components
// stateless functional components are faster because they don't manage lifecycle, for one

componentDidMount() {
  console.log("ComponentDidMount!");
}

// fires after the component updates
// such as when state values or props values change 
componentDidUpdate() {
  console.log("componentdidUpdate");
}

// fires when a component dissapears from the screen
// e.g., you change windows or screens and it renders a completely different component

componentWillUnmount() {
  console.log("componentWillUnmount");
}

