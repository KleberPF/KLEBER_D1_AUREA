import React from 'react';

const Grid = ({ color = 'red', isActive = true, transition = '' }) => {
  return (
    <>
      <div className={`grid ${isActive ? 'active' : ''}`}>
        {[...Array(7)].map((__, key2) => (
          <div className={`column ${transition}`} key={key2}>
            {[...Array(5)].map((___, key3) => (
              <div
                className='item'
                key={key3}
                style={{ background: color }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
