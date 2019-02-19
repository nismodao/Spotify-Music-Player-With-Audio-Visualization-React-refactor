import React from "react";
import ReactDOM from "react-dom";
import App from './components/App.js';

ReactDOM.render(<App />, document.getElementById("root"));

module.hot.accept('./components/App.js', () => {
  const NextRootContainer = require('./components/App.js').default;
  ReactDOM.render(<NextRootContainer />, document.getElementById('root'));
});

