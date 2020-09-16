import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

handleClick = () => {
  console.log('hello')
}
ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={ this.props.handleClick } />
  </div>,
  document.getElementById('root')
);