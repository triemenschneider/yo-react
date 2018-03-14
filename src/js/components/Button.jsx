import React from 'react';
import PropTypes from 'prop-types';

const Button = props => <button>{props.title}</button>;

Button.propTypes = {
  title: PropTypes.string.isRequired
};

Button.defaultProps = {
  title: 'hey yo!'
};

export default Button;
