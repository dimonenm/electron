import React from "react";
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
import {App} from './components/App'

require('application.css')

// window.subscribeForEntries((_, data) => {
//   console.log(data.entries);
// })
console.log(window);

window.onload = () => {
  // ReactDOM.render(<App />, document.getElementById('root'))
  const container = document.getElementById('root');
  const root = createRoot(container); 
  root.render(<App tab="home" />);
}
