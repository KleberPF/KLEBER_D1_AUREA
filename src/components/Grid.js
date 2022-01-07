import React from 'react';
import ImageContainer from './ImageContainer';

const Grid = ({ isActive = true, transition = '', startingImage = 0 }) => {
  return (
    <>
      <div className={`grid ${isActive ? 'active' : ''}`}>
        {[...Array(7)].map((__, key1) => (
          <div className={`column ${transition}`} key={key1}>
            {[...Array(5)].map((___, key2) => (
              <ImageContainer
                key={key2}
                src={`https://picsum.photos/236/350.jpg?random=${
                  key1 * 5 + key2 + startingImage
                }`}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
