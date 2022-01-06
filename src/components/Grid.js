import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Grid = ({ color = 'red', isActive = true, transition = '' }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Test');
    axios.get(`https://picsum.photos/v2/list?limit=${7 * 5}`).then((resp) => {
      console.log(resp.data);
      setImages(resp.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {!loading && (
        <div className={`grid ${isActive ? 'active' : ''}`}>
          {[...Array(7)].map((__, key1) => (
            <div className={`column ${transition}`} key={key1}>
              {[...Array(5)].map((___, key2) => {
                return (
                  <div key={key2}>
                    <img
                      className='item'
                      src={images[key1 * 5 + key2].download_url}
                      width='236px'
                      height='350px'
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
