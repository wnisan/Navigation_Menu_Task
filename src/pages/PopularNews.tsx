import React from 'react';

const PopularNews: React.FC = () => {
  return (
    <div className="page">
      <h2>🔥 Popular news</h2>
      <p>The most discussed and read news this week:</p>
      <ul>
        <li>The company's shares rose by 15%.</li>
        <li>Our team won the championship</li>
        <li>The launch of the new product took place</li>
      </ul>
    </div>
  );
};

export default PopularNews;