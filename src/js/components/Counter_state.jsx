import React from 'react';
import PropTypes from 'prop-types';

class Counter_state extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }
  decrement() {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  }
  render() {
    return (
      <div className="counter">
        <h3>Stateful Counter</h3>
        <p>
          The current count shown within this component lives as{' '}
          <strong>local component state</strong> within the component itself.
        </p>
        <div className="counter-widget">
          <div className="increment" onClick={this.increment}>
            plus
          </div>
          <div className="count">{this.state.count}</div>
          <div className="decrement" onClick={this.decrement}>
            minus
          </div>
        </div>
      </div>
    );
  }
}

Counter_state.propTypes = {
  count: PropTypes.number.isRequired
};

Counter_state.defaultProps = {
  count: 0
};

export default Counter_state;
