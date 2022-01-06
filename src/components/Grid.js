import React from 'react';

const Grid = ({ isActive = true, transition = '', startingImage = 0 }) => {
  return (
    <>
      {isActive && (
        <div className={`grid ${isActive ? 'active' : ''}`}>
          {[...Array(7)].map((__, key1) => (
            <div className={`column ${transition}`} key={key1}>
              {[...Array(5)].map((___, key2) => {
                return (
                  <div key={key2}>
                    <img
                      className='item'
                      src={`https://picsum.photos/236/350.jpg?random=${
                        key1 * 5 + key2 + startingImage
                      }`}
                      alt=''
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Grid;
