import React from 'react';
import data from '../data/articles';
import Article from './Article';

const Grid = () => (
  <div className="grid">
    {data.articles.map(article => {
      return (
        <Article
          url={article.image_url}
          title={article.title}
          key={article.id}
        />
      );
    })}
  </div>
);

export default Grid;
