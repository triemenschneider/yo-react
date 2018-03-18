import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import Header from './components/Header';
import Button from './components/Button';
import Counter_state from './components/Counter_state';
import Counter_prop from './components/Counter_prop';
import Grid from './components/Grid';

import '../scss/styles.scss';

// const App = function(props) {
//   return (
//     <div>
//       <Header />
//       <Button title="click here" />
//       <Counter_state />
//       <Counter_prop />
//       <Grid />
//     </div>
//   );
// };

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 7
    };
    this.onCountChange = this.onCountChange.bind(this);
  }
  onCountChange(delta) {
    this.setState({
      count: this.state.count + delta
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Button title="click here!" />
        <Counter_state />
        <Counter_prop
          count={this.state.count}
          onCountChange={this.onCountChange}
        />
        <Grid />
      </div>
    );
  }
}

render(<App />, document.getElementById('container'));
