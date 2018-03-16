import React from 'react';

class Counter extends React.Component {
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
        <div className="increment" onClick={this.increment}>
          plus
        </div>
        <div className="count">{this.state.count}</div>
        <div className="decrement" onClick={this.decrement}>
          minus
        </div>
      </div>
    );
  }
}

export default Counter;
