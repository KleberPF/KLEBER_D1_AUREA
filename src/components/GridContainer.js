import React from 'react';

import Grid from './Grid';

const GridContainer = ({ activeGridIndex = 0, transition }) => {
  const colors = ['blue', 'black', 'orange', 'purple'];

  return (
    <div className='grid-container'>
      {colors.map((elem, i) => (
        <Grid
          color={elem}
          isActive={activeGridIndex === i}
          transition={transition[i]}
          key={i}
          startingImage={i * 7 * 5}
        />
      ))}
    </div>
  );
};

export default GridContainer;
