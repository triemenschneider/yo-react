import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import Button from './components/Button';

import '../scss/styles.scss';

const App = function(props) {
  return (
    <div>
      <Header />
      <Button title="Click here" />
    </div>
  );
};

render(<App />, document.getElementById('container'));
