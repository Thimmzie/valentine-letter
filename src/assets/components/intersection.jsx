import React from 'react';
import Sitebg from '../../../public/home-bg.png';

const intersection = () => {
  return (
    <div
      className="overall-container"
      style={{
        backgroundImage: `url(${Sitebg})`,
      }}
    ></div>
  );
};

export default intersection;
