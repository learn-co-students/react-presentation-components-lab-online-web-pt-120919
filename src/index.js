import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function handleClick() {
  console.log("I was clicked and I'm just happy!")
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={handleClick} />
  </div>,
  document.getElementById('root')
);