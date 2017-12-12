import React, { Component } from 'react';

class App extends Component {

  render() {
    const app = {
      title: 'Indecision App',
      subtitle: 'Put your life in the hands of a computer',
      options: []
    };

    const onFormSubmit = (e) => {
      // prevent normal form behavior that rerenders entire page 
      e.preventDefault();
      // get the value the user typed from  the element the event started on (the form element)
      const option = e.target.elements.option.value;
      // add the user's input to the option array
      if (option) {
        app.options.push(option);
        console.log(app.options.length);
        // after input is pushed to new array, reset input element to a blank string
        e.target.elements.option.value = '';
      }
    };
    const onRemoveAll = () => {
      app.options = [];
    };

    const onMakeDecision = () => {
      const randomNum = Math.floor(Math.random() * app.options.length);
      const option = app.options[randomNum]
      alert(option);
    }

    return (
      <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <button onClick={onMakeDecision}>What should I do?</button>
        <button onClick={onRemoveAll}>Remove All</button>
        <ul>
          {
            app.options.map((option) => {
              return <li key={option}>Option:{option}</li>
            })
          }
        </ul>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}


export default App;
