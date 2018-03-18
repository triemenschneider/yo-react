import React from 'react';
import PropTypes from 'prop-types';

const Counter_prop = props => (
  <div className="counter">
    <h3>Stateless Counter</h3>
    <p>
      The current count shown within this component lives as{' '}
      <strong>application state</strong> up in the application, and is passed
      from there as props down to the component. Onclick callback functions
      inform the application about the need to update the state, which is then
      in turn passed down to the component, which is re-rendered to show the new
      count on the UI.
    </p>
    <div className="counter-widget">
      <div
        className="increment"
        onClick={function() {
          props.onCountChange(1);
        }}
      >
        plus
      </div>
      <div className="count">{props.count}</div>
      <div
        className="decrement"
        onClick={function() {
          props.onCountChange(-1);
        }}
      >
        minus
      </div>
    </div>
  </div>
);

Counter_prop.propTypes = {
  count: PropTypes.number.isRequired
};

Counter_prop.defaultProps = {
  count: 3
};

export default Counter_prop;
