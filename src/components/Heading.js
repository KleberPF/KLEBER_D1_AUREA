import React from 'react';

const Heading = ({ activeTextIndex = 0, texts = [] }) => {
  return (
    <div className='heading'>
      <span className='text'>Get your Next</span>
      <div className='wrapper'>
        {texts.map((elem, key) => (
          <div className='offset' key={key}>
            <h2
              className={`text ${activeTextIndex !== key && 'animate-before'}`}
            >
              {elem}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Heading;
