import React from "react";
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
import { App } from './components/App'

require('application.css')





window.onload = () => {
  // ReactDOM.render(<App />, document.getElementById('root'))
  const container = document.getElementById('root');
  const root = createRoot(container); 
  root.render(<App tab="home" entries={[]} />);
  

  globalThis.subscribeForEntries.subscribe((_, data) => {
    // renderApp(JSON.parse(data).entries);
    renderApp(data.entries);
  })

  const renderApp = (entries = []) => {
    // const container = document.getElementById('root');
    // const root = createRoot(container);
    root.render(<App tab="home" entries={entries} />);
  }
}
