import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import Button from './components/Button';
import Counter from './components/Counter';
import Grid from './components/Grid';

import '../scss/styles.scss';

const App = function(props) {
  return (
    <div>
      <Header />
      <Button title="click here" />
      <Counter />
      <Grid />
    </div>
  );
};

render(<App />, document.getElementById('container'));
