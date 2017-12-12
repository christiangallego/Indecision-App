import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import IndecisionApp from './components/IndecisionApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<IndecisionApp />, 
document.getElementById('root'));
registerServiceWorker();


