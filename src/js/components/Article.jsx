import React from 'react';
import PropTypes from 'prop-types';

const Article = props => (
  <div className="article">
    <img src={props.url} alt={props.title} />
    <p>{props.title}</p>
  </div>
);

Article.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Article;
