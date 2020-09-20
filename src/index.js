import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';
// import App from "./App"

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={undefined} />
  </div>,
  // <App />,
  document.getElementById('root')
);